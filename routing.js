const http = require('http');
const fs = require('fs');

const server = http.createServer((res,rq)=>{

    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home Page");
    } else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("About Page");
    } else if(req.url==="/api"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end(JSON.stringify({
            firstName:"Karteek",
            lastName:"Bodasingi",
        }))
    }else{
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(7000,()=>{
    console.log("Server is running");
});