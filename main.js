var HelloWorld = React.createClass({
    render: function () {
        return (
            <h1>Howdy!</h1>
        );
    }
});

React.render(<HelloWorld/>, document.getElementById('example'));
