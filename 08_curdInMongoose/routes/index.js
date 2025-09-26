var express = require("express");
var router = express.Router();
const userModal = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

// Create document in db using route /create -> create({})
router.get("/create", async function (req, res) {
  const createdUser = await userModal.create([
    {
      userName: "Ram",
      age: 22,
      gender: "Male",
    },
    {
      userName: "Sita",
      age: 20,
      gender: "Female",
    },
  ]);
  res.send(createdUser);
});

// Find -> find
router.get("/findall", async function (req, res) {
  const findUser = await userModal.find();
  res.send(findUser);
});

// Find One -> findOne
router.get("/findone", async function (req, res) {
  const oneUser = await userModal.findOne({ userName: "Ram" });
  res.send(oneUser);
});

// Delete One -> f  indOneAndUpdate
router.get("/deleteuser", async function (req, res) {
  const deleteOne = await userModal.findOneAndUpdate({
    userName: "Ram",
  });
  res.send(deleteOne);
});

module.exports = router;
