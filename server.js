const express = require("express");  
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true})); 
  


app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/signup", function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.get("/login", function(req,res){
    res.sendFile(__dirname+"/login.html");
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

