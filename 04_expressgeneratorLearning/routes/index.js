var express = require("express");
var router = express.Router();
const userModal = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

// create document in db using route /create
router.get("/create", async function (req, res) {
  const createdUser = await userModal.create(
    {
      username: "testuser",
      name: "Test User",
      age: 20,
    },
    {
      username: "testuser 2",
      name: "Test User 2",
      age: 21,
    },
  ); // this is async function and they return promise
  res.send(createdUser); // send is used to send response to client
});

// Find all documents in db using route /findall
router.get("/findall", async function (req, res) {
  const allUsers = await userModal.find(); 
  res.send(allUsers);
});

// FindOne document in db using route /findone
router.get("/findone", async function (req, res) {
  const oneUser = await userModal.findOne({ username: "testuser" }); 
  res.send(oneUser);
});

// FindOne document in db using route /findone
router.get("/findone", async function (req, res) {
  const oneUser = await userModal.findOne({ username: "testuser" }); 
  res.send(oneUser);
});

// FindOneAndUpdate document in db using route /updateone
router.get("/delete", async function (req, res) {
  const deletedUser = await userModal.findOneAndDelete({ username: "testuser 3" }); 
  res.send(deletedUser);
});
module.exports = router;
