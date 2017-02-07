var redux = require('redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
    return state;
  }
};

var store = redux.createStore(reducer);

var currentState = store.getState();

console.log('Current State: ', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ben'
});

console.log('Name should be Ben', store.getState())
