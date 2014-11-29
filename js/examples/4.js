// Write this file's content to the HTML
var fs = require('fs');
document.getElementById("example-4-code").value = fs.readFileSync("./js/examples/4.js", "utf8");

var React = require('react'),
    HelloWorld = require("./helloworld");

var ClickButton = React.createClass({
    getInitialState: function() {
        return { nbClicks: 0 };
    },
    incrementNbClick: function(e) {
        this.setState({ nbClicks: this.state.nbClicks + 1 });
    },
    render: function() {
        return  <div>
                    <HelloWorld />
                    <p>J'ai cliqué {this.state.nbClicks} fois</p>
                    <button onClick={this.incrementNbClick}>+ 1</button>
                </div>

    }
});

React.render(
    <ClickButton />,
    document.getElementById("example-4")
);


