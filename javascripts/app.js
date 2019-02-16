var http = require('http');
http.createServer(function (request,response) {
   homeRoute(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');


function homeRoute (request, response) {
    if(request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('footer\n');
    }
}

function userRoute(request, response) {
    var username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");
        response.write("username\n");
        response.end('footer\n');

    }
}