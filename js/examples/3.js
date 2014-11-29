// Write this file's content to the HTML
var fs = require('fs');
document.getElementById("example-3-code").value = fs.readFileSync("./js/examples/3.js", "utf8");

var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return <h3>Hello {this.props.name} !</h3>;
    }
});

React.render(
    <HelloWorld name="people" />,
    document.getElementById("example-3")
);


