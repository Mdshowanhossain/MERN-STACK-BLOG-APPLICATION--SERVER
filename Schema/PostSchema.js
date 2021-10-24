const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      //   unique: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    image: {
      type: String,
      // require: false,
      // unique: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
    },
    createdDate: {
      type: Date,
      require: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", postSchema);
module.exports = Post;
