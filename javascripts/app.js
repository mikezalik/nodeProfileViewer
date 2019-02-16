var router = require(router.js);

//create web server
var http = require('http');
http.createServer(function (request,response) {
   homeRoute(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
