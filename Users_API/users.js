const express = require('express');
const app = express();
const users = require('./MOCK_DATA.json');
const fs = require('fs')

app.use(express.urlencoded({extended:false}))

// app.use('/',(req,res,next)=>{
//     console.log('Root path');
    
// });

app.get('/users',(req,res)=>{
    // res.json(users)
    const html = `
    <ul>
    ${users.map((user)=>{
        return `<li>${user.first_name}</li>`
    }).join("")}
    </ul>
    `;
    res.send(html)
    
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find((user)=>user.id === parseInt(id))
    res.json(user)
})

app.post('/users',(req,res)=>{
    const user = req.body;
    console.log('Body',user);
    console.log('Req headers:' +JSON.stringify(req.headers));
    // res.header('res header','Name')
    res.setHeader('Name','Seeta')
    users.push({id:users.length + 1,...user})
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
        return res.status(201).json({
            status:"success",
            id:users.length
        })
    })
    
})


app.listen(5003,()=>{
    console.log('server started');
})