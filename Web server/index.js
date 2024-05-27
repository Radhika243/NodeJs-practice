const http = require('http');
const fs = require('fs')
const url = require('url');

const server = http.createServer((req,res)=>{
    const log = `${Date.now()} - path : ${req.url} and new req received! \n `;
    //true, indicated that we are passing the query parameters 
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile('log.txt',log,(err,data)=>{
        if(req.url === '/favicon.ico') return res.end();
        switch(myUrl.pathname){
            case '/':
                res.end('Home page');
                break;
            case '/about':
                const username = myUrl.query.username;
                res.end(`About ${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Search found :${search}`);
                break;
            default:
                res.end('page not found')
        }
       
    
    })
    
})

server.listen(4001,()=>{
    console.log('server started');
})