// node core modules
const http = require('http');
const PORT = process.env.PORT || 5000;

const students = [
  {
    id: 1,
    name: 'Xurxe',
    country: 'Galicia',
    age: 25
  },
  {
    id: 2,
    name: 'Masood',
    country: 'Afghan',
    age: 25
  },
  {
    id: 3,
    name: 'Garland',
    country: 'Indian',
    age: 21
  },
  {
    id: 4,
    name: 'Kunjan',
    country: 'Nepal',
    age: 21
  }
];

http
  .createServer((req, res) => {
    const method = req.method;
    const url = req.url;
    console.log('Method:', method, 'url: ', url);
    // setting the response header, it takes status and mime type
    let status = 200; // ok
    let mimeType;

    if (method === 'GET' && url === '/') {
      mimeType = { 'Content-Type': 'text/html' }; // html type
      res.writeHead(status, mimeType);
      res.write('<h1>Welcome Home!</h1>');
    } else if (method === 'GET' && url === '/info') {
      mimeType = { 'Content-Type': 'text/plain' }; // plain text
      res.writeHead(status, mimeType);
      res.write(
        'We are just starting Node.js. I hope everybody is enjoying it.'
      );
    } else if (method === 'GET' && url === '/students') {
      const mimeType = { 'Content-Type': 'application/json' }; // json type
      res.writeHead(status, mimeType);
      res.write(JSON.stringify(students));
    }
    res.end(); // closing the req and response cycle;
  })
  .listen(PORT);
console.log(`Server is running at port ${PORT}...`);
