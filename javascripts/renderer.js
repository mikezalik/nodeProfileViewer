var fs = require('fs');

//function that handles the reading of files

function view(templateName, values, response) {
    //read from template files
var fileContents = fs.readFileSync('./views/' + templateName + '.html');

    //insert values in to content

    //write out to the response
    response.write(fileContents);
    
}

module.exports.view = view;