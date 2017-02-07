var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


// Load foundation

$(document).foundation();

//App Css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>BoilerPlate3</div>,
  document.getElementById('app')
);
//
// require('./redux-example.jsx');
require('./redux-todo-example.jsx');
