// This is Application level middleware

const express = require('express')
const app = express();

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please enter age")
    }
    else if(req.query.age<18){
        res.send("Stop You cannot access this page");
    }
    else{
        next();
    }
}

app.use(reqFilter)

app.get('',(req,res)=>{
    res.send("Welcome to Home Page")
 })

app.get('/users',(req,res)=>{
    res.send("Welcome to Users Page")
 })

app.listen(4000)