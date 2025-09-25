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
