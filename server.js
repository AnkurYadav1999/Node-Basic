const http = require('http');

const server = http.createServer((req,res)=>{
   res.write("<h1>This is ankur Yadav</h1>");
   res.end
})

server.listen(4000,()=>{
    console.log("Server running at http://localhost:4000")
})
