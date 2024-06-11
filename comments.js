// Create a web server

// Import the express library
const express = require('express');

// Create a new web server
const app = express();

// Define a route
app.get('/comments', (req, res) => {
  res.json([
    { username: 'Alice', comment: 'I love apples!' },
    { username: 'Bob', comment: 'I love oranges!' },
  ]);
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Run the server with node comments.js
// Open http://localhost:3000/comments in a web browser

// Path: index.js
// Create a web server

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Run the server with node index.js
// Open http://localhost:3000 in a web browser

// Path: index.js
// Create a web server

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

// Run the server with node index.js
// Open http://localhost:3000 in a web browser

