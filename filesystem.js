// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.readFile('empty.txt',(err,data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8002)


// var http = require('http');
// var fs = require('fs');

// http.createServer((req,res)=>{
//     fs.appendFile('empty.txt','is a full stack developer',(err,data)=>{
//         res.write(data);
//         res.end();
//     })
// }).listen(8002)


var http = require('http');
var fs = require('fs');

http.createServer((req,res)=>{
    fs.writeFile('empty.txt','metro labs',(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(8002)



