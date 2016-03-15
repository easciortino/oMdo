var React = require('react');
var Navbar = require('../components/navbar');

var NavbarContainer = React.createClass({
  
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  
  handleToSurvey: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/survey'
    });
  },
  handleToProfile: function(e) {
    e.preventDefault();
    this.context.router.push({
      pathname: '/profile'
    });
  },
  
  render: function() {
    return (
      <Navbar />  
    )
  }
});

module.exports = NavbarContainer;