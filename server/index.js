let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

io.on('connect', onConnect);

function onConnect(socket){

console.log('connected'+socket.id);

 socket.on('join', function(username) {
        socket.username = username;
        console.log(username);
		socket.join(username);
    });

socket.on('message', (message) => {
	console.log(message);
	//io.to('rajesh').emit('message', message);
	//io.emit('message', message);
	//io.sockets.emit('hello', message);
    //socket.broadcast.emit('message', message);
	 socket.broadcast.to('rajesh').emit('message', message);
});

};

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});