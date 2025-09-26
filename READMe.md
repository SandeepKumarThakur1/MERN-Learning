# Backend

### Node JS

Node (or Node.js) is an open-source, cross-platform JavaScript runtime environment that lets you run JavaScript outside of the browser.

Normally, JavaScript is executed only inside web browsers (like Chrome, Firefox). But Node.js allows you to run JavaScript on your computer or server, making it possible to build backend applications using JavaScript.

### Key Points about Node.js:

1. **Built on V8 Engine** – It uses Google Chrome’s V8 JavaScript engine for fast execution.

2. **Asynchronous & Event-driven** – Handles multiple requests at the same time without blocking (non-blocking I/O).

3. **Used for Backend Development** – You can create APIs, web servers, real-time apps (like chat apps), etc.

4. **NPM (Node Package Manager)** – Comes with a package manager that has millions of libraries you can use.

5. **Cross-platform** – Works on Windows, Linux, and macOS.

### 🚀 How Node.js Works

1. **Single Person (Thread):**
   Imagine Node.js is one waiter in a restaurant.

2. **Takes Orders (Requests):**
   The waiter takes orders from many customers (clients).

3. **Delegates Work:**
   If the order is simple (like getting water), the waiter does it immediately.  
   If it’s heavy (like cooking food), the waiter gives it to the kitchen staff (background workers).

4. **Continues Serving Others:**
   While food is being cooked, the waiter doesn’t wait — he goes and takes more orders.

5. **Delivers When Ready:**
   When the kitchen finishes cooking, the waiter picks it up and serves the customer.

### 🛠 How Node.js Was Created (Simple Way)

1. **Before Node.js** – JavaScript worked only inside browsers (like Chrome, Firefox).

2. **2009** – A developer named Ryan Dahl wanted JavaScript to run outside the browser (for backend servers).

3. **Used V8 Engine** – He used Google Chrome’s V8 engine because it was very fast.

4. **Added libuv** – To handle tasks like file reading, networking, and database queries in a non-blocking way.

5. **Created Node.js** – Combined JavaScript + V8 + libuv, and Node.js was born.

6. **Added NPM (2010)** – A package manager to use libraries easily.

7. **Result** – Now developers can use JavaScript for both frontend and backend.

### 📦 What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js.

It is used to install, manage, and share libraries (packages) for JavaScript and Node.js projects.

### 📦 What is a Package?

A package is simply a collection of code/files (like functions, modules, or tools) that someone has written and published to NPM so others can use it.

### 1️⃣ Using the built-in http module

Node.js has a built-in module called http to create servers. You don’t need to install anything.

```bash
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url == "/about"){
        res.end("About Us Page");
    }

    if(req.url == "/contact"){
        res.end("Contact Us Page");
    }

    if(req.url == "/services"){
        res.end("Services Page");
    }

    if(req.url == "/"){
        res.end("Home Page");
    }
})

server.listen(3000)
```

#### ✅ Steps:

1. `require("http")` – import the HTTP module.
2. `createServer()` – create a server and define what happens on each request.
3. `listen(3000)` – start server on port 3000.
4. Open browser → `http://localhost:3000` → you’ll see the response.

### 2️⃣ Using Express (Recommended)

Express is a popular Node.js package for creating servers easily.

```bash
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.get('/about', (req, res) => {
    res.send("About Us Page");
})

app.listen(3000)
```

### 🛠 What is Middleware?

Middleware is a function that sits between the request and response in a server.

It can process, modify, or control requests before sending a response.

**NOTE :-** Think of it like a checkpoint in a factory: every request passes through, and you can check, modify, or block it before it reaches the final stage.

#### 🔑 Key Points:

1. Middleware functions have access to:

- `req` → request data
- `res` → response object
- `next()` → function to pass control to the next middleware

2. It’s used for:

- Logging requests
- Authentication & authorization
- Handling errors
- Parsing JSON or form data

```bash
const express = require('express');
const app = express();

// Middle ware
app.use((req, res, next)=>{
    console.log("New Request Made");
    next();
})


app.get('/', (req, res) => {
    res.send("Home Page");
})

app.get('/about', (req, res) => {
    res.send("About Us Page");
})

app.listen(3000)
```

## Express JS

Express.js (or just Express) is a web framework for Node.js.

It makes building web servers, APIs, and web applications easier and faster than using the plain Node.js http module.

#### 🔑 Key Features:

1. **Simpler Server Creation** – Less code to create routes and handle requests.

2. **Routing System** – Built-in support for GET, POST, PUT, DELETE routes.

3. **Middleware Support** – Easily use functions to process requests, like authentication, logging, or JSON parsing.

4. **Scalable** – Good for small apps and large real-world applications.

5. **Works with Node.js** – It’s not a replacement, it’s built on top of Node.js.

### ⚡ Node.js vs Express.js

| Feature         | **Node.js**                                                                           | **Express.js**                                                                     |
| --------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Definition**  | A **runtime environment** that allows JavaScript to run on the server (backend).      | A **framework** built on top of Node.js to make server creation easier and faster. |
| **Level**       | Low-level (basic server setup, more manual work).                                     | High-level (provides tools, routing, middleware support).                          |
| **Ease of Use** | You need to write more code for routes, handling requests, responses, and middleware. | Easier and faster: simple syntax for routes, middleware, and APIs.                 |
| **Routing**     | Manual routing using the `http` module.                                               | Built-in routing system with `app.get`, `app.post`, etc.                           |
| **Middleware**  | You need to handle manually or build your own.                                        | Supports middleware easily (`app.use`) for logging, authentication, etc.           |
| **Performance** | Very fast (bare metal)                                                                | Slightly slower due to abstraction but much easier to develop and maintain.        |
| **Use Case**    | Good for learning, small servers, or highly customized setups.                        | Ideal for real-world applications, APIs, RESTful services, and full-stack apps.    |

# EJS

EJS (Embedded JavaScript Templating) is a template engine for Node.js and Express.js.
It allows you to write HTML with embedded JavaScript.

**In short:**

It lets you create dynamic web pages.<br>
You can embed variables, conditions, and loops directly inside your HTML files.

#### 🔑 Key Features of EJS

- Embed JavaScript in HTML using <%= %> or <% %>.
- Fast and lightweight – only adds a thin layer on top of plain HTML.
- Supports partials – reuse components (like header, footer, navbar).
- Works with Express.js – simple to integrate as a view engine.
- Similar to plain HTML – easy for beginners.

### Express with EJS Setup

1. EJS Setup -> Install EJS

```bash
npm install ejs
```

2. Configure EJS

```bash
app.set("view engine", "ejs")
```

3. Create views folder
   views/index.ejs

```bash
Example inside index.ejs: <h1><%= text %></h1>
```

4. Render EJS file

```bash
res.render("index", { text: "EJS Example" })
```

#### Template Engines

1. EJS
2. Pug
3. Handlebars
4. Mustache

5. Static Files Setup -> Create a public folder

6. Use express static

```bash
app.use(express.static("public"))
```

7. Example in HTML/EJS:

```bash
<link rel="stylesheet" href="/stylesheets/main.css">
```

### 🚀 Express Generator

Express Generator is a command-line tool provided by Express.js to quickly create a skeleton/boilerplate for an Express application.

Instead of writing all the initial setup code manually, you can generate a ready-made project structure with just one command.

#### Setup steps for Express Generator

1. Install Node.js & npm (check with node -v and npm -v).
2. Install Express Generator globally:

```bash
npm install -g express-generator
```

3. Create a new app:

```bash
express appName --view=ejs
```

4. Move into the project folder:

```bash
cd appName
```

5. Install dependencies:

```bash
npm install
```

6. Start the server:

```bash
npx nodemon
npm start
```

7. Open in browser: http://localhost:3000

## MongoDB & Databases

### What is MongoDB?

- MongoDB is a NoSQL database (non-relational database).
- It stores data in BSON (Binary JSON) format, which makes it flexible and schema-less compared to relational databases.

### What is a Database?

- A Database is a place where the data of any application is stored in an organized way.
- Example: Storing user details, product information, orders, etc.

### Types of Databases (Mainly)

1. Relational Database (RDBMS)

- Example: SQL, MySQL, PostgreSQL
- Data stored in tables (rows & columns).
- Follows a fixed schema.

2. Non-Relational Database (NoSQL)

- Example: MongoDB, Firebase
- Data stored in documents (key-value pairs, JSON-like format).
- Schema-less (flexible structure).

### What is Mongoose?

- Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
- It helps you interact with a MongoDB database in an easier, structured, and more secure way.

### Step by Step how to use MongoDB with Mongoose

1. Install MongoDB (server)
2. Install Mongoose

```bash
npm install mongoose
```

3. Require Mongoose and set up the connection

```bash
mongoose.connect('mongodb://127.0.0.1:27017/dbname');
```

4. Make a Schema

```bash
mongoose.Schema({...})
```

5. Create a Model and export it

```bash
mongoose.model('ModelName', schema).
module.exports = mongoose.model(...)
```

#### Example `models/User.js`

```bash
# // models/User.js
const mongoose = require('mongoose');

const dbURI = 'mongodb://127.0.0.1:27017/testdbname'; // change testdbname if you want

# // connect to MongoDB
mongoose
  .connect(dbURI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

# // define schema (blueprint of a document)
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: String,
  age: Number
}, { timestamps: true }); // timestamps adds createdAt and updatedAt

# // create and export the model
// Model name 'User' -> collection will be 'users' (auto-pluralized)
module.exports = mongoose.model('User', userSchema);

```

#### After create user then `app.js`

```bash
const express = require('express');
const app = express();
const User = require('./models/User'); // path to the file above

app.get('/create-user', async (req, res) => {
  try {
    const user = await User.create({ username: 'sandeep', name: 'Sandeep', age: 22 });
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(3000, () => console.log('Server running on port 3000'));

```

### Client & Server Concepts

1. Client → Cookies

- Small pieces of data stored in the client’s (browser) memory.
- Example: Remembering login info, preferences.

2. Server → Sessions

- Server-side storage to keep track of user’s data during a session.
- Example: Shopping cart items, logged-in user info.

#### Session Setup in Express

1. install express session

```bash
npm install express-session
```

2. use in app.js file

```bash
const session = require("express-session");

app.use(
  session({
    secret: "mySecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // true only if https
  })
);
```

##### **NOTE**

- create - req.session.key = value
- read - req.session.key
- delete - req.session.destroy(callback)

#### Cookie Setup in Express

1. install cookie parser -> by default install if we install express-generator

```bash
npm install cookie-parser
```

2. use in app.js file

```bash
const cookieParser = require("cookie-parser");

app.use(cookieParser());
```

##### **NOTE :- How to use cookie**

```bash

- Create cookie
router.get("/", function (req, res) {
  res.cookie("age", 25);
  res.send("Cookie is set");
  // res.render("index");
});

- read cookie
router.get("/getcookie", function (req, res) {
  var age = req.cookies.age;
  res.send("Age of the user is " + age);
});

- delete cookie
router.get("/deletecookie", function (req, res) {
  res.clearCookie("age");
  res.send("Cookie is deleted");
});
```

## What is a Flash Message?

- A flash message is a temporary message that is stored in the session and removed after being displayed once.
- Commonly used for showing success, error, or warning notifications in web apps.

#### 👉 Example:

- User logs in → req.flash("success", "Login successful!")
- Redirects to dashboard → message is shown only once.
- Refresh page → message disappears (auto-cleared).

### Step-by-step setup for flash messages in Express

1. Install packages

```bash
npm install connect-flash
npm install express-session
```

2. File: app.js — main setup (order matters!)

```bash
const session = require('express-session');
const flash = require('connect-flash');

# // session
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "keyboard cat",
  })
);

# // flash message
app.use(flash());

```

3. File: routes/index.js — example routes (set + show)

```bash
var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});

# // create Flash Message
router.get("/failed", function (req, res) {
  req.flash("age", 22);
  req.flash("name", "John Doe");
  res.send("Created a flash message. Go and check in /check route");
});

# // read Flash Message
router.get("/check", function (req, res) {
  res.send(`Flash messages are logged in console`);
  console.log(req.flash("age"), req.flash("name"));
});

module.exports = router;

```