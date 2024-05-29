// const fs = require('fs');
// // 
// const stream = fs.createReadStream('./sample.txt','utf-8')
// stream.on('data',(chunk)=>{
//     console.log(chunk);
// });
// stream.on("end",()=>{
    
// })

//Readable stream
// const {Readable} = require('stream');

// const inStream = new Readable({
//     read(){}
// });

// inStream.push('GeeksForGeeks:');
// inStream.push('Readable stream');

// inStream.push(null);//data pushing is done, so printing null @ last

// inStream.pipe(process.stdout) //output : GeeksForGeeks:Readable stream

const {Writable} = require('stream');

const outStream = new Writable({
    write: function (chunk,encoding,callback){
        console.log(chunk.toString());// without toString() : <Buffer 48 65 6c 6c 6f>
        callback();
    }
})

process.stdin.pipe(outStream);
outStream.write('Hello')