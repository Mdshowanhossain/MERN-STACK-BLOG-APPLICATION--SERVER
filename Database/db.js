const mongoose = require("mongoose");

const Connection = async () => {
  try {
    const URL =
      "mongodb+srv://FirstData:FirstData1@cluster0.f2pep.mongodb.net/mernBlog?authSource=admin&replicaSet=atlas-qzci16-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
    await mongoose.connect(URL, () => {
      console.log("Database Connection Successfully");
    });
  } catch (err) {
    console.log("Database Error", err);
  }
};
module.exports = Connection;
