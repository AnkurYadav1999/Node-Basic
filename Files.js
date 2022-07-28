const fs = require('fs');
const path = require('path');


const dirPath = path.join(__dirname,'files') //Gives path of current directory

for(let i=0;i<5;i++){
    fs.writeFileSync(`${dirPath}/hello${i}.txt`,`This is File${i}`)
}


//This is using Callbacks
// fs.readdir(dirPath,(err,Files)=>{
//     Files.forEach((item)=>{
//      console.log(item);
//     })
// })


const data = fs.readdirSync(dirPath)
console.log(data)


// This is creating files and view there name in console