var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});

// create Flash Message
router.get("/failed", function (req, res) {
  req.flash("age", 22);
  req.flash("name", "John Doe");
  res.send("Created a flash message. Go and check in /check route");
});

// read Flash Message
router.get("/check", function (req, res) {
  res.send(`Flash messages are logged in console`);
  console.log(req.flash("age"), req.flash("name"));
});

module.exports = router;

// Setup Flash Messages in Express
// 1. npm install connect-flash

// 2. In app.js, add the following lines:
// const flash = require("connect-flash");
// app.use(flash());

// 3. In your routes, you can set flash messages using req.flash(key, value) and retrieve them using req.flash(key).

// 4. Flash messages are stored in the session and are cleared after being accessed once. 

// 5. Flash messages are useful for passing temporary messages (like error or success messages) between routes.

// 6. In this example, we set flash messages in the /failed route and retrieve them in the /check route.

// 7. When you access the /check route, the flash messages will be logged to the console and will no longer be available in subsequent requests.
