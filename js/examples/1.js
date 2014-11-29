// Write this file's content to the HTML
var fs = require('fs');
document.getElementById("example-1-code").value =
    fs.readFileSync("./js/examples/1.js", "utf8");

var React = require('react');

React.render(
    React.createElement("h3", null, "Hello World !"),
    document.getElementById("example-1")
);
