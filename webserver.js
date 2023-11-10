const http = require('http')
const fs = require('fs')
const { error } = require('console')
const port = 3008

const server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text'})
    fs.readFile('index.txt',function(err,data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            res.write(data)
        }
        res.end()
    })
    res.write('Hello Node')
    res.end()
})

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong' , error)
    } else{
        console.log('Server is listening' + port)
    }
})