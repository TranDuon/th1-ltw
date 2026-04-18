const schemaInfo = {
  load_date_time: "Fri Apr 29 2016 01:45:15 GMT-0700 (PDT)",
  __v: 0,
  _id: "57231f1b30e4351f4e9f4bf6",
};

// Create init users.

const im = {
  _id: "57231f1a30e4351f4e9f4bd7",
  first_name: "Minh",
  last_name: "Nguyễn",
  location: "Hà Nội",
  description: "Lẽ ra hôm đó tôi nên ở yên trong xe.",
  occupation: "Nhà toán học",
};
const er = {
  _id: "57231f1a30e4351f4e9f4bd8",
  first_name: "Lan",
  last_name: "Trần",
  location: "Hải Phòng",
  description: "Hạng 6, lái tàu rất cứng.",
  occupation: "Sĩ quan vận hành",
};
const pt = {
  _id: "57231f1a30e4351f4e9f4bd9",
  first_name: "Phúc",
  last_name: "Tạ",
  location: "Đà Lạt",
  description:
    "Nhà ở lại phía sau, còn thế giới ở phía trước... " +
    "Và phía trước là rất nhiều con đường để bước tiếp. Qua bóng tối, đến tận rìa đêm, " +
    "cho tới khi những vì sao bừng sáng... Sương mù và bóng đêm rồi cũng tan đi... ",
  occupation: "Chủ trang viên",
};
const rk = {
  _id: "57231f1a30e4351f4e9f4bda",
  first_name: "Khánh",
  last_name: "Lê",
  location: "Đà Nẵng",
  description: "Rất vui được có mặt ở đây!",
  occupation: "Kỹ sư cơ khí",
};
const al = {
  _id: "57231f1a30e4351f4e9f4bdb",
  first_name: "An",
  last_name: "Lưu",
  location: "Cần Thơ",
  description: "Tính hơi lạnh nhưng rất thương động vật.",
  occupation: "Nhân viên cứu hộ động vật",
};
const jo = {
  _id: "57231f1a30e4351f4e9f4bdc",
  first_name: "Quang",
  last_name: "Phạm",
  location: "TP.HCM",
  description: "<i>Lập trình web là chân ái!</i>",
  occupation: "Giảng viên",
};

const users = [im, er, pt, rk, al, jo];

// Create initial photos.
const photo1 = {
  _id: "57231f1a30e4351f4e9f4bdd",
  date_time: "2012-08-30 10:44:23",
  file_name: "sai-gon-1.jpg",
  user_id: jo._id,
};
const photo2 = {
  _id: "57231f1a30e4351f4e9f4bde",
  date_time: "2009-09-13 20:00:00",
  file_name: "ha-noi-ho-guom.jpg",
  user_id: im._id,
};
const photo3 = {
  _id: "57231f1a30e4351f4e9f4bdf",
  date_time: "2009-09-13 20:05:03",
  file_name: "ha-noi-pho-co.jpg",
  user_id: im._id,
};
const photo4 = {
  _id: "57231f1a30e4351f4e9f4be0",
  date_time: "2013-11-18 18:02:00",
  file_name: "hai-phong-ben-cang.jpg",
  user_id: er._id,
};
const photo5 = {
  _id: "57231f1a30e4351f4e9f4be1",
  date_time: "2013-09-20 17:30:00",
  file_name: "hai-phong-hoang-hon.jpg",
  user_id: er._id,
};
const photo6 = {
  _id: "57231f1a30e4351f4e9f4be2",
  date_time: "2009-07-10 16:02:49",
  file_name: "da-nang-cau-rong.jpg",
  user_id: rk._id,
};
const photo7 = {
  _id: "57231f1a30e4351f4e9f4be3",
  date_time: "2010-03-18 23:48:00",
  file_name: "da-nang-bien-dem.jpg",
  user_id: rk._id,
};
const photo8 = {
  _id: "57231f1a30e4351f4e9f4be4",
  date_time: "2010-08-30 14:26:00",
  file_name: "da-nang-pho-bien.jpg",
  user_id: rk._id,
};
const photo9 = {
  _id: "57231f1a30e4351f4e9f4be5",
  date_time: "2013-12-03 09:02:00",
  file_name: "da-lat-doi-thong.jpg",
  user_id: pt._id,
};
const photo10 = {
  _id: "57231f1a30e4351f4e9f4be6",
  date_time: "2013-12-03 09:03:00",
  file_name: "da-lat-suong-som.jpg",
  user_id: pt._id,
};
const photo11 = {
  _id: "57231f1a30e4351f4e9f4be7",
  date_time: "2013-09-04 09:16:32",
  file_name: "can-tho-cho-noi.jpg",
  user_id: al._id,
};
const photo12 = {
  _id: "57231f1a30e4351f4e9f4be8",
  date_time: "2008-10-16 17:12:28",
  file_name: "da-nang-xe-may.jpg",
  user_id: rk._id,
};

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
];

// Create initial comments.
const comment1 = {
  _id: "57231f1a30e4351f4e9f4be9",
  date_time: "2012-09-02 14:01:00",
  comment:
    "Học một ngôn ngữ lập trình mới đúng là vất vả... " +
    "chỉ cần quên một thẻ </div> là đủ mệt rồi!",
  user: jo,
  photo_id: photo1._id,
};

const comment2 = {
  _id: "57231f1a30e4351f4e9f4bea",
  date_time: "2013-09-06 14:02:00",
  comment:
    "Bình luận này hơi dài một chút; " +
    "mình muốn xem nếu nội dung dài thì có tự xuống dòng đẹp không?",
  user: jo,
  photo_id: photo1._id,
};

const comment3 = {
  _id: "57231f1a30e4351f4e9f4beb",
  date_time: "2013-09-08 14:06:00",
  comment:
    "Nếu bạn thấy đoạn này hiện <b>in đậm</b> thì " +
    "nghĩa là phần escape HTML đang có vấn đề.",
  user: jo,
  photo_id: photo1._id,
};

const comment4 = {
  _id: "57231f1a30e4351f4e9f4bec",
  date_time: "2009-09-14 18:07:00",
  comment:
    "Lịch sử phát triển đã cho thấy rằng " +
    "sự sống không dễ bị giam trong khuôn khổ. Nó luôn tìm đường vượt qua rào cản, " +
    "có thể chậm rãi, có thể nguy hiểm, nhưng cuối cùng nó vẫn tìm được lối đi.",
  user: im,
  photo_id: photo2._id,
};

const comment5 = {
  _id: "57231f1a30e4351f4e9f4bed",
  date_time: "2013-11-28 17:45:13",
  comment:
    "Mới đi công tác về. Mọi người lại định làm chuyện thiếu suy nghĩ nữa à?",
  user: er,
  photo_id: photo5._id,
};

const comment6 = {
  _id: "57231f1a30e4351f4e9f4bee",
  date_time: "2013-11-02 14:07:00",
  comment:
    "Khánh ơi, dáng chụp đẹp quá. Bạn chỉnh lại đống đồ cũ kiểu gì mà nhìn hay thế?",
  user: er,
  photo_id: photo7._id,
};

const comment7 = {
  _id: "57231f1a30e4351f4e9f4bef",
  date_time: "2013-11-02 14:09:15",
  comment:
    "Có chứ! Mình cũng rất thích ảnh của bạn. Khi nào mình đi công tác về thì gặp nhau cà phê nhé!",
  user: rk,
  photo_id: photo7._id,
};

const comment8 = {
  _id: "57231f1a30e4351f4e9f4bf0",
  date_time: "2010-09-06 13:59:33",
  comment: "Hôm nay mình có bạn mới! Nói là bạn theo mình về nhà thì đúng hơn.",
  user: rk,
  photo_id: photo8._id,
};

const comment9 = {
  _id: "57231f1a30e4351f4e9f4bf1",
  date_time: "2008-10-16 18:04:55",
  comment:
    "Không có con xe này thì mình chẳng đi đâu nổi! " +
    "Tự ráp từ đồ cũ mà vẫn chạy rất bốc.",
  user: rk,
  photo_id: photo12._id,
};

const comment10 = {
  _id: "57231f1a30e4351f4e9f4bf2",
  date_time: "2013-12-04 13:12:00",
  comment: "Sao bạn lại bảo chưa từng nghe đến bữa phụ buổi sáng lần hai nhỉ?",
  user: pt,
  photo_id: photo10._id,
};

const comment11 = {
  _id: "57231f1a30e4351f4e9f4bf3",
  date_time: "2013-09-04 10:14:32",
  comment:
    "Đẹp nhưng lạnh lùng. Thích ở một mình. Không dễ nghe lời, " +
    "nhưng lâu lâu vẫn chịu hợp tác.",
  user: al,
  photo_id: photo11._id,
};

const comment12 = {
  _id: "57231f1a30e4351f4e9f4bf4",
  date_time: "2016-01-04 2:00:01",
  comment: "Trong ảnh này bạn là người nào vậy?",
  user: al,
  photo_id: photo9._id,
};

const comment13 = {
  _id: "57231f1a30e4351f4e9f4bf5",
  date_time: "2016-01-04 2:04:01",
  comment: "Người cao nhất đó.",
  user: pt,
  photo_id: photo9._id,
};

const comments = [
  comment1,
  comment2,
  comment3,
  comment4,
  comment5,
  comment6,
  comment7,
  comment8,
  comment9,
  comment10,
  comment11,
  comment12,
  comment13,
];

comments.forEach(function (comment) {
  const photo = photos.filter(function (photo) {
    return photo._id === comment.photo_id;
  })[0]; // Only one match. Return the content of the match inside the array

  if (!photo.comments) {
    photo.comments = [];
  }
  photo.comments.push(comment);
});

const userListModel = function () {
  return users;
};

const userModel = function (userId) {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === userId) {
      return users[i];
    }
  }
  return null;
};

const photoOfUserModel = function (userId) {
  return photos.filter(function (photo) {
    return photo.user_id === userId;
  });
};

const schemaModel = function () {
  return schemaInfo;
};

const models = {
  userListModel: userListModel,
  userModel: userModel,
  photoOfUserModel: photoOfUserModel,
  schemaInfo: schemaModel,
};

module.exports = models;
