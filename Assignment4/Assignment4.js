//4. Use above chatbot module in web based chatting of websocket.
const WebSocket = require('ws') // npm i ws --save
var http = require('http');
var fs = require('fs');
const bot=require("../bot")

var httpserver = http.createServer(function(request, response) 
{
  if(request.url=="/")
  {
    fs.readFile("./public/bot4.html",(err,data)=>{
        response.write(data)
        response.end();
    })
  }
}).listen(8080, function() {
    console.log((new Date()) + 
      ' Server is listening on port 8080');
});
const wss=new WebSocket.Server({server:httpserver})
wss.on("connection",(clientws)=>{
  clientws.send("Hello Client")
  clientws.on("message",(msg)=>{
    console.log("Received "+msg)
    clientws.send(bot.reply(msg.toString()))
  })
})