var mysql = require('mysql');
const express = require('express');
const app = express();
const promise = require('util');
const path = require('path');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'maryam@123',
  database : 'inventorydb'
});
 
connection.connect(function(err) {
  if (err) {
      console.error('error connecting: ' + err.stack);
      return;
  }
  console.log('Database connected!');
});

const promisequery = promise.promisify(connection.query).bind(connection);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/getdata', (req, res) => {
  const result = promisequery('SELECT * FROM employee');
  result.then(function(rows) {
      res.json(rows);
  }
  ).catch(function(err) {
      console.log('Error: ', err);
  }
  );
});

app.get('/',(req,res)=>{
  res.render('assignment9');
});

app.post('/addEmployee',(req,res)=>{
  const {Name, Department, Salary} = req.body;
  const result = promisequery('INSERT INTO employee (employeename,department,salary) VALUES (?,?,?)',[Name,Department,Salary]);
  result.then(function(rows) {
      res.redirect('/');
  }
  ).catch(function(err) {
      console.log('Error: ', err);
  }
  );
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});
