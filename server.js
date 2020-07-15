const express = require('express');
const socketio = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
const server = app.listen(port, () => {
  console.log(`ポート番号${port}`);
});
const io = socketio(server);

io.sockets.on('connection', (socket) => {
  socket.on('send', function(data) {
      socket.broadcast.emit('server_message', data)
  });
})