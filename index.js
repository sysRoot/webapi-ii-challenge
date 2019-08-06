// Bootstrap server

const server = require('./server');

//port
port = process.env.PORT | 3333

server.listen(port, ()=> console.log(`running on port ${port}`))