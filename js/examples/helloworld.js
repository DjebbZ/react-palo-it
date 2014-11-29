var React = require("react");

var HelloWorld = React.createClass({
    getDefaultProps: function() {
        return { name: "World" };
    },
    render: function() {
        return <h3>Hello {this.props.name} !</h3>;
    }
});

module.exports = HelloWorld;
