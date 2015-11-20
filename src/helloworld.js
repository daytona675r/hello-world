
var MyComponent=React.createClass({
	render: function(){
		return(
			<h1>hello {this.props.name}!</h1>
			);
	}
});

ReactDOM.render(
	<MyComponent name="Mario"/>,
	document.getElementById('mount-point')
	);