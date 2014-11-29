// Write this file's content to the HTML
var fs = require('fs');
document.getElementById("example-2-code").value = fs.readFileSync("./js/examples/2.js", "utf8");

var React = require('react');

React.render(
    <h3>Hello World !</h3>,
    document.getElementById("example-2")
);

