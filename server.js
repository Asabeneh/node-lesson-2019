// node core modules
const http = require('http');
const PORT = process.env.PORT || 5000;

http
  .createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    console.log('Method:', method, 'url: ', url);
    // setting the response header, it takes status and mime type
    const status = 200; // ok
    const mimeType = { 'Content-Type': 'text/plain' }; // plain text
    res.writeHead(status, mimeType);
    res.end('Hello, World');
  })
  .listen(PORT);
console.log(`Server is running at port ${PORT}...`);
