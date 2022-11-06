// 1. Develop a web server with following functionalities:
// - Serve static resources.
// - Handle GET request.
// - Handle POST request.

const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/page1.html', function (req, res) {
    res.sendFile("page1.html");
})

app.get('/process_get', function (req, res) {
    var response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };

    console.log(response);
    
    res.end(JSON.stringify(response));
})

app.use(express.urlencoded());

app.post('/process_post',
    function (req, res) {
        res.write("First name = " + req.body.first_name + "\n");
        res.write("Last name = " + req.body.last_name);
        res.end();
    })


const server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("app listening at http://%s:%s ", host, port);
})