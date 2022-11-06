const http = require('http');
const fs = require('fs');
const url = require('url');
 const server = http.createServer((req,res)=>{
    console.log("Request Recieved = > "+req.url)
    if(req.url=="/"){
        var filename = './assignment2.html';
        fs.readFile(filename,function(err,data){
            if(err){
                res.writeHead(404, {'Content-Type':'text/html'});
                res.write("404 Not found");
                return res.end();
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if(req.url=="/getHello" && req.method==='GET'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("Hello NodeJS!!");
        return res.end();
    }
    else{
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("404 Not found");
        return res.end();
    }
 });

 server.listen(8081);
console.log("Server is listening on port 8081");