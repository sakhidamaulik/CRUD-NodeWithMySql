const connection = require('./app');
connection.query('SELECT * FROM employees', (err,rows) => {
    if(err) throw err;
  
    console.log('Data received from Db:\n');
    rows.forEach((row) => {
      console.log(`${row.name} is in ${row.location}`);
    })
  });
  
  const employee = { name: 'Bill Gates', location: 'Canada' };
  connection.query('INSERT INTO employees SET ?', employee, (err, res) => {
    if(err) throw err;
  
    console.log('Last insert ID:', res.insertId);
  });
  
  connection.query(
    'UPDATE employees SET location = ? Where ID = ?',
    ['South Africa', 2],
    (err, res) => {
      if (err) throw err;
  
      console.log(`Changed ${res.changedRows} row(s)`);
    }
  );
  
  connection.query(
    'DELETE FROM employees WHERE id = ?', [5], (err, res) => {
      if (err) throw err;
  
      console.log(`Deleted ${res.affectedRows} row(s)`);
    }
  );
  