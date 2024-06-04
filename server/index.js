const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

const app = express();
const port = 5000;

// Path to the CSV file (make sure this matches the actual path and filename)
const datasetPath = path.join(__dirname, 'data', 'P1-P8.zsa');

// Endpoint to serve the data
app.get('/data', (req, res) => {
  const results = [];
  fs.createReadStream(datasetPath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    });
});
app.get('/', (req, res) => {
    res.send('Welcome to the data server. Use /data to get the dataset.');
  });
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
