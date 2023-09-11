const http = require('http');
const routes = require('./routes-1.js')

http.createServer(routes).listen(3000);