var Profile = require("./profile.js");

var studentProfile = new Profile("mikezalik");


//When JSON is received end event is triggered.
studentProfile.on("end", console.dir);


studentProfile.on("error", console.error);