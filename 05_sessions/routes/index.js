const e = require("express");
var express = require("express");
var router = express.Router();

// For setup Session
// to install express-session
// npm install express-session

// create session
router.get("/", function (req, res) {
  req.session.ban = true; // session is created with key anyname and any value
  res.send("<h1>Session is created</h1>");
  res.render("index");
});

// read session
router.get("/checkban", function (req, res) {
  if (req.session.ban === true) {
    res.send("<h1>You Are Banned User.</h1>");
  } else {
    res.send("<h1>You are not banned user.</h1>");
  }
});

// delete session
router.get("/romoveban", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("<h1>Your ban is removed</h1>");
  });
});

// Set a session
// create - req.session.key = value
// read - req.session.key
// delete - req.session.destroy(callback)

module.exports = router;
