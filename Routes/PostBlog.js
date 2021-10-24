const express = require("express");
const router = express.Router();

const {
  createPost,
  getAllPost,
  getPost,
  updateBlog,
  deleteBlog,
} = require("../controllers/PostBlog.js");

const mongoose = require("mongoose");

const URL = "http://localhost:8000";

const { uploadFile, getImage } = require("../controllers/uploadImage.js");

const upload = require("../utilities/upload.js");

router.post("/create", createPost);
router.get("/posts", getAllPost);
router.get("/post/:id", getPost);
router.post("/updateblog/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);
router.post("/file/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json("File Not Found");
    const imageURL = await `${URL}/file/${req.file.filename}`;
    res.status(200).json(imageURL);
  } catch (err) {
    res.status(500).json("Error while UploadFile", err);
  }
});
router.get("/file/:filename", getImage);

module.exports = router;
