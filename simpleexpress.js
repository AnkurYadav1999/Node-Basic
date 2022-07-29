const express = require('express')
const app = express();

app.get('', (req, res) => {
    console.log("Data sent by browser",req.query.name);
    res.send('Hello '+req.query.name);
})

app.get('/about', (req, res) => {
    res.send('Hello , This is About page');
})

app.get('/skills', (req, res) => {
    res.send('Hello , This is skills page');
})

app.get('/projects',(req,res)=>{
    res.send('Hello , This is projects page');
})

app.listen(4000,()=>{
    console.log("This is running on http://localhost:4000");
})