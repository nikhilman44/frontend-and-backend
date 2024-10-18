const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 8008; // Choose a port for the backend

// Middleware to parse JSON
app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
