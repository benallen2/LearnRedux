var redux = require('redux');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var nextHobbyId = 1;
var nextMovieId = 1;

var oldReducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            movie: action.movie,
            genre: action.genre
          }
        ]
      }
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.id)
      }
    default:
    return state;
  }
};

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  }
};

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

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Ben'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'games'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'web dev'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Anna'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'La la land',
  genre: 'Musical'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: 'Arrival',
  genre: 'Sci-Fi'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
})
