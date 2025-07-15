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