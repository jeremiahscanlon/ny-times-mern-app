var React = require('react');

var Main = require('../components/Main');
var Home = require('../components/Home');
var Saved = require('../components/Saved');


var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;


module.exports=(
    <Route path="/" component={Main} >
        <Route path='/saved' component={Saved} />
        <IndexRoute component={Home} />
    </Route>
);