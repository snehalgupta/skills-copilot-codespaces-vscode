// Create web server
const express = require('express');
const app = express();

// Importing the comments
const comments = require('./comments');

// Serve static files
app.use(express.static('public'));

// Get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Listen to port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: comments.js
// Comments data
const comments = [
  { id: 1, author: 'John', body: 'Cool!' },
  { id: 2, author: 'Jane', body: 'Nice!' },
  { id: 3, author: 'Jack', body: 'Great!' },
];

module.exports = comments;