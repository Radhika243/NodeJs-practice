const express = require('express');
const app = express();
const http = require('http');
const path=require('path');
const server = http.createServer(app);
const PORT = process.env.PORT || 9003;
//when the page loads, a socket.io.js script will be generated , so we need to render the page based on the script to modify it from front end
const {Server} = require('socket.io')
const io = new Server(server);//creates a new server
app.use(express.static(path.resolve('./public')));

app.get('/',(req,res)=>{
    return res.sendFile("./public/index.html")
})
//socket is nothing but the client
io.on('connection',(socket)=>{
    //console.log(`A user has been created with the socket id: ${socket.id}`);
    socket.on('user-message',(message)=>{
        //when the client message is received from server , send the message to all the io connections
        //console.log(`Message received from client: ${message}`);
        io.emit('message',message)
    })
})

server.listen(PORT,()=>{
    console.log(`Server started at PORT: ${PORT}`);
})