const http = require('http');
const routes = require('./routes.js')

http.createServer(routes).listen(3000);