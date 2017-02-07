var redux = require('redux');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};


//name Reducer and action generators
//------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

//hobby Reducer and action generators
//------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
    return [
      ...state,
      {
        id: nextHobbyId++,
        hobby: action.hobby
      }
    ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
}

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};


//movie Reducer and action generators
//------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
    return [
      ...state,
      {
        id: nextMovieId++,
        movie: action.movie,
        genre: action.genre
      }
    ]
    case 'REMOVE_MOVIE':
    return state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
}

var addMovie = (movie, genre) => {
  return {
    type: 'ADD_MOVIE',
    movie,
    genre
  }
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('name is:', state.name);
  document.getElementById('app').innerHTML = state.name;
})
// unsubscribe();

var currentState = store.getState();

console.log('Current State: ', currentState);

store.dispatch(changeName('Ben'));

store.dispatch(changeName('Anna'));

store.dispatch(addHobby('Games'));

store.dispatch(addHobby('Web Dev'));

store.dispatch(addMovie('La La Land', 'Musical'));

store.dispatch(addMovie('Arrival', 'Sci-Fi'));

store.dispatch(addMovie('Ted', 'Comedy'));

store.dispatch(removeHobby(2));

store.dispatch(removeMovie(1));
