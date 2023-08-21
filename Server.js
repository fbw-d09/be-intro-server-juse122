// Import required modules
const http = require('http');

// Load environment variables from .env file
require("dotenv").config();

// Initialize a counter
let counter = 0;

// Create a server instance
const port = process.env.PORT;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.write("Hello World");
            res.end();
            break;
    
        case "/now":
            res.write(`${ new Date().toLocaleDateString("de-DE") }, ${ new Date().toLocaleTimeString("de-DE") }`);
            res.end();
            break;

        case "/count":
            res.write(`${ counter }`);
            counter++;
            res.end();
            break;
    };
});

// Start the server
server.listen(port, () => {
    console.log(`Der Server läuft auf Port ${ port }.`);
});
