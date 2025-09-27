var express = require("express");
var router = express.Router();
const userModal = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});

// router.get('/create', async function(req, res) {
//     const createdUser = await userModal.create([
//       {
//         username: "unknown",
//         nickname: "not know",
//         description: "hum nhi jante hai isske bare me.",
//         categories : [],
//       },
//     ])
//     res.send(createdUser)
// });

// 1. How can I perform a case-insensitive search in Mongoose ?
router.get("/find", async function (req, res) {
  const regex = RegExp("^rAm$", "i"); // ^ start with ram , $ end with ram. RegExp is case insensitive
  // const user = await userModal.find({userame : "Ram"})
  const user = await userModal.find({ username: regex });
  res.send(user);
});

// 2. How can I fiter documents where an array field contains all of a set of values ?
router.get("/filter", async function (req, res) {
  // const filterArray = await userModal.find() // find all
  const filterArray = await userModal.find({
    categories: { $all: ["smart-boy"] },
  });
  res.send(filterArray);
});

// 3. How can I search for document with a specific date range in Mongoose ?
router.get("/filterDate", async function (req, res) {
  const date1 = new Date("2025-09-26");
  const date2 = new Date("2025-09-27");
  const filterDateData = await userModal.find({
    datecreated: { $gte: date1, $lte: date2 },
  });
  res.send(filterDateData);
});

// 4. How can I fiter documents based on the existence of a field Mongoose ?
router.get("/filterExist", async function (req, res) {
  const filterExitData = await userModal.find({
    categories: { $exists: true },
  });
  res.send(filterExitData);
});

// 5. How can I fiter documents based on a specific field's length in Mongoose ?
router.get("/filterlength", async function (req, res) {
  const filterlengthData = await userModal.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: '$nickname' }, 0] },
        { $lte: [{ $strLenCP: '$nickname' }, 5] },
      ],
    },
  });
  res.send(filterlengthData);
});

module.exports = router;
