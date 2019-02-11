const app = require('./app');
const http = require("http");
const io = require('socket.io')(server)

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

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
})

app.use(express.static(__dirname));
