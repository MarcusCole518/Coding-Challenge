const app = require('./app');
const http = require("http");
const port = normalizePort(process.env.PORT || "3010");
app.set("port", port);
const server = http.createServer(app);
const io = require('socket.io')(server)
server.listen(port);

function normalizePort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}


server.on("listening", () => {
    console.log(`server is listening for requests on port ${server.address().port}`);
});

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.username = "Bloc-wallChallenge-user"

    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    socket.on('new_message', (data) => {
        io.sockets.emit('new_message', {message: data.message, username: socket.username});
    })
})


