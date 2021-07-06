const express = require('express');
const path = require('path');
const compression = require('compression');

var app = express();

app
    .use(compression())
    // Static content
    .use(express.static(path.join(__dirname + '/')))
    // Default route
    .use(function(req, res) {
        console.log('HTML: ', path.join(__dirname + '/dist/Minershare/') + 'index.html');
        res.sendFile(path.join(__dirname + '/dist/Minershare/') + 'index.html');
    })
    // Start server
    .listen(15000, function () {
        console.log('Port: ' + 15000);
    });