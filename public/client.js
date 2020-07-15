const socket = io.connect();
document.getElementById('send').onclick = () => {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  socket.emit('send', {
    name,
    message,
  });
  const li = document.createElement('li');
  li.textContent = `${name}さん: ${message}`;
  document.getElementById('list').appendChild(li);
};

socket.on('server_message', (data) => {
  const li = document.createElement('li');
  li.textContent = `${data.name}さん: ${data.message}`;
  document.getElementById('list').appendChild(li);
});