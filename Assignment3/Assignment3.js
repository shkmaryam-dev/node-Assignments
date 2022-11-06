//3. Develop a module for domain specific chatbot and use it in a command line application.
const readLine = require("readline")
const bot = require('../bot')

var r1 = readLine.createInterface(process.stdin, process.stdout);
r1.setPrompt("You => ");
r1.prompt();

r1.on('line',(msg)=>{
    console.log("Bot ==> " + bot.reply(msg))
    r1.prompt();
}).on('close' , ()=>{
    process.exit();
})