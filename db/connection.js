const mysql = require('mysql2');

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  //MySQL username,
  user: 'root',
  //MySQL password
  password: 'BabyKat21!',
  // Database NAme
  database: 'employeeDB'
});

// exporting database connection
module.exports = db;