const express = require('express');
const app=express();
const PORT= 8001;
const {connectToMongoDB} = require('./connect')
const URL = require('./model/url')
const URLRoute = require('./routes/url')
const path=require('path')

connectToMongoDB('mongodb://localhost:27017/db_name').then(()=>{
    console.log(`Mongodb connected!!!`);
})
app.use(express.json());
//ejs files are html files
app.set('view engine','ejs')
app.set('views',path.resolve('./views'))
//res.render(home) -> for rendering ejs
app.use('/url',URLRoute);

app.get('/test',(req,res)=>{
    const allUrls = URL.find({});
    // res.end(
    //     `
    //     <html>
    //     <h1>URLS</h1>
    //     <ul>
    //         ${allUrls.map((url)=>{
    //             return `<li>{url.shortId}</li>`
    //         })}
    //     </ul>
    //     </html>
    //     `
    // )
    res.render(home,{
        urls:allUrls
    })
})
app.get('/url/:shortId',async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId,
    },{
        $push:{
            visitHistory:{
                timestamp:Date.now()
            }
        }
    })
    res.redirect(entry.redirectURL)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})