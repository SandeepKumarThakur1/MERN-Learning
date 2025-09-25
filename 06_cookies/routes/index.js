const e = require("express");
var express = require("express");
var router = express.Router();

// Cookies setup route

// Create cookie
router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.send("Cookie is set");
  // res.render("index");
});

// read cookie
router.get("/getcookie", function (req, res) {
  var age = req.cookies.age;
  res.send("Age of the user is " + age);
});

// delete cookie
router.get("/deletecookie", function (req, res) {
  res.clearCookie("age");
  res.send("Cookie is deleted");
});

module.exports = router;
