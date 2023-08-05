var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
console.log("connected at localhost:27017");
}).listen(27017);
