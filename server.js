'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use(function(req, res) {
    res.sendFile(INDEX)
  })
  .listen(PORT, function() {
    console.log('Listening on ' + PORT)
  });

const io = socketIO(server);

io.on('connection', function(socket) {
  console.log('Client connected');

  socket.emit('connection_callback', {
      'time': new Date().toTimeString()
  });

  socket.on('client_message', function(data) {
      console.log(data);
  });

  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });
});

setInterval(function() {
    io.emit('time', new Date().toTimeString())
}, 1000);
