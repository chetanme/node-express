require("http").createServer(function handleRequest(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hellow World by server 2");
}).listen("8080");
