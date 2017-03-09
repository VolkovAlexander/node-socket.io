var io = require('socket.io-client'),
    socket = io.connect('https://sf-socket.herokuapp.com/', {
        port: 3000
    });

socket.on('connect', function () { console.log("socket connected"); });

socket.on('connection_callback', function(data) {
    console.log(data);
});

socket.emit('client_message', { user: 'me', msg: 'whazzzup?' });