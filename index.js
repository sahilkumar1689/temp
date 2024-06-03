/*Steps:
1. Firstly write command "npm init -y" to create a empty node app.
2. After that run commnad "npm install express nodemon dotenv".
3. After that create the index.js file.After that in that file firstly import the express that import the dotenv.After that create the app object with the help of express imported class.
4. After that create a ".env" file and add the port number.And also create a ".gitignore" file then add node_modules and .env file inside it.
5. After that come in the index.js and create a port variable and use the port created in the .env file by using "process.env.PORT".After that simple create servers and listen any particular port numbers.
*/ 

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

// You can also sent the json data.
app.get('/temp4',(req,res)=>{
    const dataArr = [{name:"Sahil Kumar",rollno:5},{name:"Akshay Sharma",rollno:1}];
    res.json(dataArr);
})


// Use the "listen" method of the "app" object to listen from the particular port:
app.listen(port,()=>{
    console.log(`Your app starting listend at port ${port}`);
})


// Note = 1. Never add any semicolon in you .env file
