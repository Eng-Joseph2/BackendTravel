const multer = require("multer");

const StorageImag = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const UploadImage = multer({
  storage: StorageImag,
});
module.exports = UploadImage;
