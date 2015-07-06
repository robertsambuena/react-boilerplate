/* temporary work around for touch, must be on top */
var injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();


/* start */

var React         = require('react'),
    DOM           = React.DOM,
    SayHello      = require('./components/say-hello.js'),
    Menu          = require('./components/MyAwesomeReactComponent.js'),
    Login         = require('./components/login.js');

// React.render(
//     <SayHello/>,
//     DOM.getElementById('content'));

// React.render(
//     <Login/>,
//     DOM.getElementById('login'));

// React.render(
//     <Menu/>,
//     document.getElementById('menu'));
