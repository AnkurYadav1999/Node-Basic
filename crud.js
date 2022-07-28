const fs = require('fs')
const path = require('path')

const dirName = path.join(__dirname,'crud')
// console.log(dirName)


// Now CRUD Operations with File System


// CREATE File
// fs.writeFileSync(dirName+"/"+"File1.txt","This is content of File 1");
// fs.writeFileSync(dirName+"/"+"File2.txt","This is content of File 2");


// READ File
// console.log(fs.readFileSync(dirName+"/"+"File1.txt","utf-8"));


// UPDATE File
// fs.appendFileSync(dirName+"/"+"File2.txt"," and new text is added")
// fs.renameSync(dirName+"/"+"File2.txt",dirName+"/"+"FileTwo.txt")


// DELETE File
// fs.unlinkSync(dirName+"/"+"FileTwo.txt")



