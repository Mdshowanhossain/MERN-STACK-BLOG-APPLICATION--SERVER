// const { GridFsStorage } = require("multer-gridfs-storage");
// const multer = require("multer");

// const storage = new GridFsStorage({
//   url: "mongodb+srv://FirstData:FirstData1@cluster0.f2pep.mongodb.net/mernBlog?authSource=admin&replicaSet=atlas-qzci16-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
//   file: (request, file) => {
//     const match = ["image/png", "image/jpg", "image/jpeg"];

//     if (match.indexOf(file.mimetype) === -1)
//       return `${Date.now()}-blog-${file.originalname}`;

//     return {
//       bucketName: "Photos",
//       filename: `${Date.now()}-blog-${file.originalname}`,
//     };
//   },
// });

// module.exports = multer({ storage });

const express = require("express");
const path = require("path");
const multer = require("multer");
const router = express.Router();

const UPLOADS_FOLDER = "../public/upload";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_FOLDER);
  },
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);

    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    cb(null, fileName + fileExt);
  },
});

let upload = multer({
  storage: storage,
  limits: {
    fieldSize: 100000000000,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
    }
    console.log(file);
  },
});

// router.post(""),
//   (req, res) => {
//     res.send("upload");
//   };

module.exports = multer({ upload });
