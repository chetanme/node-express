var http = require("http");

var server = http.createServer();

function handleRequest(req, res) {
  res.writeHead(200, {'Content-type': 'text/plain'});
  res.write("Hello World by Chetan!");
  res.end();
}

server.on("request", handleRequest);
server.listen(8090);
