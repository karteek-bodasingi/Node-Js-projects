const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip()

const readableStream =  fs.createReadStream("./file1.txt",{
encoding:"utf-8",
highWaterMark:2,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

const writeableStream = fs.createWriteStream("./file2.txt");
 
readableStream.pipe(writeableStream);

// in the 11 line first we readstream and using gzip functionality(transform module) we will transform to writestream and creates a new zip file of file2.txt