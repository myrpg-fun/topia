const path = require('path');
const fs = require('fs');
const compression = require('compression');
const config = require('./config.json');
const express = require('express');
const app = express();

const __publicdist = path.join(__dirname, 'dist');

app.use(compression());
app.use(express.static(__publicdist));
app.get('*', function(request, response){
    response.sendFile(__publicdist+'/build/index.html');
});

var options = {};

const https = require('http').createServer(options, app);

async function start(){
    https.listen(config.port, config.host, function(){
        console.log('listening on http://'+config.host+':'+config.port);
    });
}

start();