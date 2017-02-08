//name Reducer
//------------------------
export var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state
  };
};

//hobby Reducer
//------------------------
var nextHobbyId = 1;
export var hobbiesReducer = (state = [], action) => {
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
};

//movie Reducer
//------------------------
var nextMovieId = 1;
export var moviesReducer = (state = [], action) => {
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
};

//map Reducer
//------------------------
export var mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_LOCTATION_FETCH':
      return {
        isFetching: true,
        url: undefined
      }
    case 'COMPLETE_LOCATION_FETCH':
      return {
        isFetching: false,
        url: action.url
      }
    default:
      return state;
  }
};
