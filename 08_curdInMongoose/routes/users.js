// Require Mongoose
const mongoose = require("mongoose");

// Connections
mongoose.connect("mongodb://127.0.0.1:27017/dummydbName");

// Create Schema
const userschema = mongoose.Schema({
  userName: String,
  age: Number,
  gender: String,
});

// Modal Export
module.exports = mongoose.model("users", userschema);
