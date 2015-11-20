var Loader = React.createClass({
  getInitialState: function() {
    return {percent: 0};
  },
  tick: function() {
    this.setState({
      percent: this.state.percent + 1
    });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 100);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>loading: {this.state.percent}%</div>
    );
  }
});

ReactDOM.render(
  <Loader />, 
  document.getElementById('loader-point')
  );

