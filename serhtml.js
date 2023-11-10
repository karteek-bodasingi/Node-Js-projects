const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Check if the request is for the root path
  if (req.url === '/') {
    // Read the HTML file
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        // Handle error, e.g., file not found
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        // Send the HTML content as the response
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Handle other paths if needed
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
