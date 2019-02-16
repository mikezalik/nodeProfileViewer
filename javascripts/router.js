
//handle HTTP route GET / and POST /
function home(request, response) {
    if(request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end('footer\n');
    }
}

//handle HTTP route GET /:username
function user(request, response) {
    var username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Header\n");
        response.write(username + "\n");
        response.end('footer\n');

    }
}


module.exports.home = home;
module.exports.user = user;

