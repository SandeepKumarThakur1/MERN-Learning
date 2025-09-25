const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

// app.get("/", function (req, res) {
//   res.send("Hello, Express!");
// });

app.get("/", function (req, res) {
  res.render("index", { age: 20 });
});

app.get("/error", function (req, res, next) {
  // throw new Error("This is a forced error.");
  // next(new Error("This is a forced error."));
  throw Error("Something went wrong!");
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
})

// app.get("/about/:users", function (req, res) {
//   res.send(`About users ${req.params.users}`);
// });

app.listen(3000);


// ejs setup
// 1. ejs install -> npm install ejs
// 2. configure ejs -> app.set("view engine", "ejs")
// 3. create views folder -> views/index.ejs
// 4. render ejs file -> res.render("index", { text: "EJS Example" })

// Templete Engine
// 1. ejs
// 2. pug
// 3. handlebars
// 4. mustache

// Static Files
// 1. create public folder
// 2. app.use(express.static("public"));
// 3. <link rel="stylesheet" href="/stylesheets/main.css">
