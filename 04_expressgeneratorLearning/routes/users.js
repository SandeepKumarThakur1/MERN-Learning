// install monogDB
// install mongoosejs
// require and setup connection
// make a schema
// create model and export

const mongoose = require("mongoose");

// mongoose.connect('mongodb://127.0.0.1:27017/dbname'); // 127.0.0.1 --> localhost
mongoose.connect("mongodb://127.0.0.1:27017/testdbname"); // to create db if not exists

const userschema = mongoose.Schema({
  // schema is like blueprint of document
  username: String,
  name: String,
  age: Number,
});

// mongoose.model(naam, schema); // model is like collection of documents
module.exports = mongoose.model("users", userschema); // users is collection name
