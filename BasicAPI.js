const http = require('http');
const data = require('./Data')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
})


server.listen(4000,()=>{
    console.log("Server created http://localhost:4000")
})



// https://restfulapi.net/http-status-codes/   ----- API codes reference