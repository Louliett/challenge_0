"use strict";

const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.on('connection', function (socket) {
    console.log(socket.remoteAddress);
});

server.listen(port, () => {
    console.log('server running on port: ' + port);
});