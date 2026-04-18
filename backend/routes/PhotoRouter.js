const express = require("express");
const mongoose = require("mongoose");
const Photo = require("../db/photoModel");
const User = require("../db/userModel");
const router = express.Router();

router.get("/photosOfUser/:id", async (request, response) => {
  const { id } = request.params;

  if (!mongoose.isValidObjectId(id)) {
    return response.status(400).json({ error: `Invalid user id: ${id}` });
  }

  try {
    const userExists = await User.exists({ _id: id });
    if (!userExists) {
      return response.status(400).json({ error: `No user found with id: ${id}` });
    }

    const photos = await Photo.find({ user_id: id })
      .select("_id user_id comments file_name date_time")
      .sort({ date_time: 1, _id: 1 })
      .lean();

    const commentUserIds = [
      ...new Set(
        photos.flatMap((photo) =>
          (photo.comments || []).map((comment) => String(comment.user_id)),
        ),
      ),
    ];

    const commentUsers = await User.find({ _id: { $in: commentUserIds } })
      .select("_id first_name last_name")
      .lean();

    const userMap = new Map(
      commentUsers.map((commentUser) => [String(commentUser._id), commentUser]),
    );

    const responsePayload = photos.map((photo) => ({
      _id: photo._id,
      user_id: photo.user_id,
      file_name: photo.file_name,
      date_time: photo.date_time,
      comments: (photo.comments || []).map((comment) => ({
        _id: comment._id,
        comment: comment.comment,
        date_time: comment.date_time,
        user: userMap.get(String(comment.user_id)) || null,
      })),
    }));

    return response.json(responsePayload);
  } catch (error) {
    return response.status(500).json({ error: "Failed to fetch user photos." });
  }
});

module.exports = router;
