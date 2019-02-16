var http = require('http');
http.createServer(function (request,response) {
   homeRoute(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');


function homeRoute (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('footer\n');
}