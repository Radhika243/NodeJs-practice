const express = require('express');

const app = express();
//Express is a framework internally uses url,http packages inside it and gives a efficient and readable code
app.get('/',(req,res)=>{
    res.send('Home page');
});

//4.8.12 --> Versioning
//~ -> only minor fix version can change(12 can change, but 4.8 can't be changed)
//^ -> compatible with version(the major release(locks the major version) and patch updates)
//12->minor bug fix(like spelling change and uppercase)
//8 -> recommended bug fix (Security updates)
//4 -> major release(include breaking changes)
app.get('/about',(req,res)=>{
    const username = req.query.username;
    const age = req.query.age;
    res.send(`Hi I am ${username} and age:${age} `);
})

app.listen(5002,()=>{
    console.log('express server connected');
})