const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Connection = require("./Database/db.js");
const PostBlog = require("./Routes/PostBlog.js");

// Database Connection
Connection();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", PostBlog);

app.listen(process.env.PORT || 8000, () => {
  console.log("SERVER IS RUNNING NOW");
});
