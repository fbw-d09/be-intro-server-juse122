// Import required modules
const http = require('http');
const url = require('url');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize a counter
let counter = 0;

// Create a server instance
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  // Define routes
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else if (parsedUrl.pathname === '/now') {
    const now = new Date();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Current Date and Time: ${now}`);
  } else if (parsedUrl.pathname === '/count') {
    counter++;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Count: ${counter}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Start the server
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
