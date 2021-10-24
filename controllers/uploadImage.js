const mongoose = require("mongoose");

const URL = "http://localhost:8000";

const conn = mongoose.connection;

// conn.once("open", () => {
//   gfs = Grid(conn.db, mongoose.mongo);
//   gfs.collection("fs");
// });

const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json("File Not Found");
    const imageURL = await `${URL}/file/${req.file.filename}`;
    res.status(200).json(imageURL);
  } catch (err) {
    res.status(500).json("Error while UploadFile", err);
  }
};

const getImage = async (req, res) => {
  try {
    console.log(req.params.filename);

    const file = await gfs.files.findOne({ filename: req.params.filename });
    console.log(file);
    const readStream = await gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (err) {
    // res.status(400).json("Error while GetImage", err);
    console.log(err.message);
  }
};

module.exports = { uploadFile, getImage };
