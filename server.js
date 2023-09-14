const express = require("express");  
const bodyParser = require("body-parser");
const ejs = require('ejs');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true})); 
  


app.get('/', (req, res) => {
    res.render('index', {
        pageTitle: 'My EJS App',
        appName: 'EJS Demo'
    });
});

// Define a route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Define routes for other pages
app.get('/about', (req, res) => {
    res.render('about');
});

// Add more routes for other pages as needed
app.get('/upload', (req, res) => {
    res.render('upload');
});


app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/signup", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req, res){

    var firstName=req.body.fname;
    var lastName=req.body.lname;
    var email = req.body.email;
    var password;
    if(req.body.password==req.body.cpassword){
        password = req.body.password;
    }else{
        console.log("password and confirm password are not same.")
    }
 
    console.log(firstName, lastName, email, password)

})

app.listen(3000, function(){
console.log("Server started on port: 3000");
});

