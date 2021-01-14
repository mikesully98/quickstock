var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'Sulliv@ncodes98',      // Replace with your database password
  database: 'TVModels' // // Replace with your database Name
}); 




module.exports = {conn};