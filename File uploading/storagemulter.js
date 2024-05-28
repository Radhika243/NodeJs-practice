const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path')

app.set('view engine','ejs');
app.set('views',path.resolve('./views'))

app.use(express.urlencoded({extended:false}))//parses form data
app.get('/',(req,res)=>{
     res.render("Home")
})

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,'./files')
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()} - ${file.originalname}`)
    }

})

const upload = multer({storage:storage});

app.post('/upload',upload.single("profileImage"),(req,res)=>{
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/')
})
app.listen(4004,()=>{
    console.log(`server connected at 4004`);
})