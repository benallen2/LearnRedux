var redux = require('redux');

console.log('redux todo example started');

//reducer that returns default state, create store.  search text prop is empty
//todos default empty array, showCompleted is false
var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = stateDefault, action) => {

  return state;
}

var store = redux.createStore(reducer);

console.log('current state:', store.getState());
