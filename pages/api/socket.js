import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new Server(res.socket.server)
    res.socket.server.io = io

    io.on('connection', socket => {
      console.log('a user connected');

      socket.on('disconnect', () => {
        console.log('a user disconnected');
      })
      socket.on('chat message', msg => {
        socket.broadcast.emit('chat message', msg)
      })
    })
  }
  res.end()
}

export default SocketHandler