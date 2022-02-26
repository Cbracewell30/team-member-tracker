const express = require('express');
// Add near the top of the file
const routes = require('./routes');
const req = require('express/lib/request');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/connection');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Add after Express middleware
app.use('/api', Routes);



  // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });