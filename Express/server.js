var express = require('express');  
var app = express(); 
//const cors=require("cors");
const BookRoute = require('./routes/BookRoute') 
const jwt = require("./libs/jwt")
const helmet = require("helmet")
const morgan = require("morgan")
const cookieparser = require("cookieparser")

// const Book = require("./models/Book")
//app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use(helmet())
app.use(morgan('combined'))
app.use(cookieparser)
app.get('/getkey',jwt.sign)
app.use("/Books" , BookRoute);
app.listen(8000);

//change with app.post app.get . test with postman
// make another application with model route and controller separate