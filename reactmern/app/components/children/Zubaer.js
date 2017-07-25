// Include React
var React = require("react");

// Creating the Results component
var Zubaer = React.createClass({

  getInitialState: function() {
    return { count: 0 };
  },

  componentDidMount: function () {    
    this.setState( { count: 0} );
  },

  componentDidUpdate(prevProps, prevState) {

    setTimeout(function() { 
    
      this.setState( function (prevState) {
          return {count: prevState.count + 1};
      });

    }.bind(this), 1000);

  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Zubaer Rules React?!?!?!{this.state.count}</h3>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Zubaer;