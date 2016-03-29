var React = require('react');
var Greeting = require('../components/greeting');
var Container = require('./allPurposeContainer');
var Home = require('../components/home');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var homeActions = require('../actions/homeActions');

var HomeContainer = React.createClass({
  componentWillMount: function() {
    this.props.actions.checkAuth();
  },
  render: function() {
    var pathname = this.props.location.pathname;
    return (
      <Container>
        <Greeting text='oMdo Welcomes You' username={this.props.username} location={this.props.location.pathname} />
        <Home text='Home' />
      </Container>
    )
  }
});

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.authReducer);
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(homeActions, dispatch)
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
