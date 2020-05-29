const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'company'
});

connection.connect((err) => {
  if (err) {
    console.log('Error connecting to DB');
    return;
  }
  console.log('DB Connected!');
});

module.exports = connection;