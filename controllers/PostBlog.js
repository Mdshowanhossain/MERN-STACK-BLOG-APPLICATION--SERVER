const Post = require("../Schema/PostSchema.js");

const createPost = async (req, res) => {
  try {
    const post = await new Post(req.body);
    post.save();
    res.status(200).send("Blog Saved Successfully");
  } catch (err) {
    res.status(500).json(err);
    console.log("Error From Controller Create Post", err);
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find();
    res.status(200).send(allPost);
  } catch (err) {
    res.status(500).json(err);
    console.log("Error From GetAll Post", err);
  }
};

const getPost = async (req, res) => {
  try {
    let getPost = await Post.findById(req.params.id);
    res.status(200).send(getPost);
  } catch (err) {
    res.status(500).json(err);
    console.log("From Specefic Post", err);
  }
};

const updateBlog = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
    res.status(200).send("Blog Updated Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteBlog = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id);
    post.delete();
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { createPost, getAllPost, getPost, updateBlog, deleteBlog };
