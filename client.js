var io = require('socket.io-client'),
    socket = io.connect('https://sf-socket.herokuapp.com/', {
        port: 3000
    });
socket.on('connect', function () { console.log("socket connected"); });
socket.emit('private message', { user: 'me', msg: 'whazzzup?' });