const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");

const storage = new GridFsStorage({
  url: "mongodb+srv://FirstData:FirstData1@cluster0.f2pep.mongodb.net/mernBlog?authSource=admin&replicaSet=atlas-qzci16-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",
  file: (request, file) => {
    const match = ["image/png", "image/jpg", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1)
      return `${Date.now()}-blog-${file.originalname}`;

    return {
      bucketName: "Photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
