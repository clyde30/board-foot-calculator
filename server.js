const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.static(__dirname))

app.listen(8080, function() {
    console.log("Listening on 8080");
});

app.get('/', function (req, res) {
    res.sendFile("index.html");
});
