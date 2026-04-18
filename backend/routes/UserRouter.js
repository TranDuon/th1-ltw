const express = require("express");
const mongoose = require("mongoose");
const User = require("../db/userModel");
const router = express.Router();

router.get("/user/list", async (request, response) => {
  try {
    const users = await User.find({})
      .select("_id first_name last_name")
      .sort({ last_name: 1, first_name: 1 })
      .lean();

    response.json(users);
  } catch (error) {
    response.status(500).json({ error: "Failed to fetch users." });
  }
});

router.get("/user/:id", async (request, response) => {
  const { id } = request.params;

  if (!mongoose.isValidObjectId(id)) {
    return response.status(400).json({ error: `Invalid user id: ${id}` });
  }

  try {
    const user = await User.findById(id)
      .select("_id first_name last_name location description occupation")
      .lean();

    if (!user) {
      return response.status(400).json({ error: `No user found with id: ${id}` });
    }

    return response.json(user);
  } catch (error) {
    return response.status(500).json({ error: "Failed to fetch user details." });
  }
});

module.exports = router;