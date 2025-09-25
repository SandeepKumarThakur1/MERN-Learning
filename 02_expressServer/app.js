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