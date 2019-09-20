const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const socketio = require('socket.io');
const expressServer = app.listen(8080);
const io = socketio(expressServer);

setInterval(() => {
	io.emit('coords', {
		lat: 37 + Math.random() * 20 - 10,
		lng: -96 + Math.random() * 40 - 20
	});
}, 1000);
