var http = require('http');
var server = http.createServer(function (request, response) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.end("Hello World\n");
});
server.listen(8000, '127.0.0.1');
console.log('Server is listening on port number 8000 :: 127.0.0.1:8000');


 fs = require('fs') 
fs.readFile('package.json', 'utf8', function (err,data) { 
if (err) { 
return console.log(err); 
} 
console.log(data); 
});
//test