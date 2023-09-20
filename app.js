const express = require('express');
const app = express();
const mysql = require('mysql');
const expressLayouts = require('express-ejs-layouts');
const port = 3000;

// // create database connection
// const db = mysql.createConnection({
//   host: 'localhost:4000',
//   user:'root',
//   password: '1234',
//   database:'picgallery'
// });

// // Connect
// db.connect((err) => {
//   if(err){
//     throw err;
//   }
//   console.log('Server started on port 3000');
// });


// Set EJS as the view engine
app.set('view engine', 'ejs');





// Use express-ejs-layouts middleware
app.use(expressLayouts);

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))

// Set the directory where your layout files are stored
app.set('layout', './layouts/layout'); // 'layout' refers to 'layouts/layout.ejs'



//Define a route
app.get('/', (req, res) => {
  // Pass data to the EJS template
  res.render('home', { title: 'Home Page' });
});

app.get('/home', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

app.get('/upload', (req, res) => {
  res.render('upload', { title: 'Upload' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About us' });
});

app.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});

app.get('/mygallery', (req, res) => {
  res.render('mygallery', { title: 'My Gallery' });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
