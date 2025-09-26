var express = require("express");
var router = express.Router();
const userModal = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

// router.get('/create', async function(req, res) {
//     const createdUser = await userModal.create([
//       {
//         username: "Riya",
//         nickname: "riyaaa",
//         description: "Riya is beautiful girl. She is good dancer.",
//         categories : ["Girl","Beautiful-girl","Good-dancer"],
//       },
//     ])
//     res.send(createdUser)
// });

// Q no : 1
router.get("/find", async function (req, res) {
  const regex = RegExp("^rAm$", "i"); // ^ start with ram , $ end with ram. RegExp is case insensitive
  // const user = await userModal.find({userame : "Ram"})
  const user = await userModal.find({ username: regex });
  res.send(user);
});

module.exports = router;
