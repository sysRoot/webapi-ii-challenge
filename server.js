const express = require('express')

const server = express();

const postsRouter = require('./routes/postsRoute');

server.use(express.json());
server.use('/posts', postsRouter)

module.exports = server
