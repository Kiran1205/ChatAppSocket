let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connect', onConnect);

function onConnect(socket){

console.log('connected');


	socket.on('hello', (message) => {
		console.log(message);

io.sockets.emit('hello', message);
 socket.broadcast.emit('hello', message);
});

};

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});