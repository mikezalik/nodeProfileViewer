var router = require("./router");

//create web server
var http = require('http');
http.createServer(function (request,response) {
   router.home(request, response);
   router.user(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
