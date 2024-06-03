// Importing express to make surver:
const express = require('express');

// Importing dotenv to add environment variables:
require('dotenv').config();

// Create a app object with the help of express class:
const app = express();

// creating port either come from the env file or default:
const port = process.env.PORT || 3000;


// Now we can use that "app" object to create a server:
// Syntax:
/*
app.Request_Name("customUrl",(req,res)=>{
    res.send("What ever you want to send");
})

where;
 Request_Name = get,post,add,update,delete,etc.
 customUrl = It is basically in the form of "/","/app/v1/anyname" or "/anyname".
*/
 
// e.g. :


app.get('/',(req,res)=>{
    res.send("Home Url Page.");
})

app.get('/temp1',(req,res)=>{
    res.send("Temp1 Url Page.");
})

// You can also send the html element:
app.get('/temp2',(req,res)=>{
    res.send("<h1>Temp2 Url Page.</h1>");
})

// You can also sent the array , object,etc.
app.get('/temp3',(req,res)=>{
    const dataArr = [{name:"Sahil Kumar",rollno:5},{name:"Akshay Sharma",rollno:1}];
    res.send(dataArr);
})


// Use the "listen" method of the "app" object to listen from the particular port:
app.listen(port,()=>{
    console.log(`Your app starting listend at port ${port}`);
})


// Note = 1. Never add any semicolon in you .env file
