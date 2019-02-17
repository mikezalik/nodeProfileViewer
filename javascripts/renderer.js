var fs = require('fs');

function mergeValues(values, content){
    //cycle over keys
    for(var key in values) {

    
    //replace all {{key}} with values from values object
    content = content.replace("{{" + key + "}}", values[key]);
  }
  return content;
}

//function that handles the reading of files

function view(templateName, values, response) {
    //read from template files
var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});

    //insert values in to content
    fileContents = mergeValues(values, fileContents);
    //write out to the response
    response.write(fileContents);
    
}

module.exports.view = view;