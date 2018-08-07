const express = require('express');
const app = express();

app.use(express.static(__dirname))

app.listen(5500, function() {
    console.log("Listening on 5500");
});

app.get('/', function (req, res) {
    res.sendFile("index.html");
});
