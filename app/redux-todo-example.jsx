var redux = require('redux');

console.log('redux todo example started');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
}

//changeSearchText action take searchText prop. Create reducer switch for type

var reducer = (state = stateDefault, action) => {

  switch (action.type){
    case "CHANGE_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }

  return state;
}

var store = redux.createStore(reducer);

console.log('current state:', store.getState());

store.dispatch({
  type: "CHANGE_SEARCH_TEXT",
  searchText: "new Text"
});

console.log('new state', store.getState());
