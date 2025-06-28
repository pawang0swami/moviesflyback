const mongoose = require("mongoose");

const d = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  movielink:String,
  userid: String,
});
module.exports = mongoose.model("data", d);