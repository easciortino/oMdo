var actions = require('../actions/actions');

module.exports = function(state, action) {
  var initialState = {data: null};
  state = state || initialState;
  switch(action.type) {
    case actions.QUOTE_FETCHED:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
};
