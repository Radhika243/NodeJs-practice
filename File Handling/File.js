const fs = require('fs');

// fs.writeFile('./text.txt','Hello world',(err,data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('Data written successfully');
//     }
// });

// fs.writeFileSync('./text.txt','Good afternoon buddy');

// const readFile = fs.readFileSync('./Read/read.txt','utf-8');
// console.log('The read data :' ,readFile.toString());

// fs.readFile('./Read/read.txt','utf-8',(err,data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('Reading content : ',data.toString());
//     }
// })
// console.log('log 1');
// fs.appendFile('./text.txt','How is the work going on?\n ',(err,data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('appended successfully');
//     }
// })
console.log('log 2');

// fs.copyFile('./text.txt','./text2.txt',(err,data)=>{
//     if(err){
//         throw err
//     }else{
//         console.log('copied successfully');
//     }
// })

// fs.unlinkSync('./text2.txt')
console.log(fs.statSync('./text.txt'));