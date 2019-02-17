var Profile = require("./profile.js");


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
        //get JSON
        var studentProfile = new Profile(username);
        
        studentProfile.on("end", function(profileJSON){
            
            var values = {
                avatarURL: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript,
            }
            //simple response
            response.write(values.username + " has " + values.badges + "badges\n");
            response.end('footer\n');
        });
        studentProfile.on("error", function(error){
            response.write(error.message + "\n");
            response.end('footer\n')
        });

    }
}

module.exports.home = home;
module.exports.user = user;

