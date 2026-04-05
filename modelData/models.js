/**
 * Fake model data for the photo-sharing app (lab “magic models”).
 * Paths in file_name are under public/images or absolute image URLs.
 */

const users = [
  {
    _id: "u1",
    first_name: "An",
    last_name: "Nguyễn",
    location: "Hà Nội",
    description: "Yêu thích nhiếp ảnh phong cảnh.",
    occupation: "Kỹ sư phần mềm",
  },
  {
    _id: "u2",
    first_name: "Bình",
    last_name: "Trần",
    location: "Đà Nẵng",
    description: "Du lịch và chia sẻ khoảnh khắc.",
    occupation: "Designer",
  },
  {
    _id: "u3",
    first_name: "Chi",
    last_name: "Lê",
    location: "TP.HCM",
    description: "Chụp ảnh đường phố cuối tuần.",
    occupation: "Giáo viên",
  },
];

const userById = Object.fromEntries(users.map((u) => [u._id, u]));

const photos = [
  {
    _id: "p1",
    user_id: "u1",
    date_time: "2025-03-10T14:30:00.000Z",
    file_name: "https://picsum.photos/id/10/800/600",
    comments: [
      {
        _id: "c1",
        photo_id: "p1",
        user: userById.u2,
        date_time: "2025-03-10T15:00:00.000Z",
        comment: "Góc máy rất đẹp!",
      },
      {
        _id: "c2",
        photo_id: "p1",
        user: userById.u3,
        date_time: "2025-03-11T09:15:00.000Z",
        comment: "Màu sắc tươi, thích bức này.",
      },
    ],
  },
  {
    _id: "p2",
    user_id: "u1",
    date_time: "2025-03-15T08:45:00.000Z",
    file_name: "https://picsum.photos/id/29/800/600",
    comments: [
      {
        _id: "c3",
        photo_id: "p2",
        user: userById.u2,
        date_time: "2025-03-15T10:00:00.000Z",
        comment: "Bình minh hay hoàng hôn vậy?",
      },
    ],
  },
  {
    _id: "p3",
    user_id: "u2",
    date_time: "2025-02-20T11:20:00.000Z",
    file_name: "https://picsum.photos/id/49/800/600",
    comments: [
      {
        _id: "c4",
        photo_id: "p3",
        user: userById.u1,
        date_time: "2025-02-20T12:00:00.000Z",
        comment: "Khung hình cân đối.",
      },
      {
        _id: "c5",
        photo_id: "p3",
        user: userById.u3,
        date_time: "2025-02-21T07:30:00.000Z",
        comment: "Địa điểm này ở đâu?",
      },
    ],
  },
  {
    _id: "p4",
    user_id: "u3",
    date_time: "2025-01-05T16:00:00.000Z",
    file_name: "https://picsum.photos/id/64/800/600",
    comments: [],
  },
];

export function userModel(userId) {
  return userById[userId] ? { ...userById[userId] } : null;
}

export function userListModel() {
  return users.map((u) => ({ ...u }));
}

export function photoOfUserModel(userId) {
  return photos
    .filter((p) => p.user_id === userId)
    .map((p) => ({
      ...p,
      comments: p.comments.map((c) => ({
        ...c,
        user: { ...c.user },
      })),
    }));
}

export function schemaInfo() {
  return {
    _id: "schema1",
    __v: 1,
    load_date_time: new Date().toISOString(),
  };
}

/** Default export used like the lab’s `models` object */
const models = {
  userModel,
  userListModel,
  photoOfUserModel,
  schemaInfo,
};

export default models;
