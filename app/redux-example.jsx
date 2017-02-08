var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  if (state.map.isFecthing) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
})
// unsubscribe();

var currentState = store.getState();

console.log('Current State: ', currentState);

store.dispatch(actions.fetchLocation());


//dispatch calls
store.dispatch(actions.changeName('Ben'));

store.dispatch(actions.changeName('Anna'));

store.dispatch(actions.addHobby('Games'));

store.dispatch(actions.addHobby('Web Dev'));

store.dispatch(actions.addMovie('La La Land', 'Musical'));

store.dispatch(actions.addMovie('Arrival', 'Sci-Fi'));

store.dispatch(actions.addMovie('Ted', 'Comedy'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.removeMovie(1));
