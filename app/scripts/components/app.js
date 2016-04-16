var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var MainMenu = require('./MainMenu');
var TimerPage = require('./TimerPage');

var App = React.createClass({
    render:function() {
        var path = this.props.path;
        console.log(path);
        return (
            <Router hash history={hashHistory}>
                <Route path="/" component={MainMenu}/>
                <Route path="TimerPage" component={TimerPage}/>
            </Router>
        )
    }
});

ReactDOM.render(
    <App path={location.pathname}/>,
    document.getElementById('root')
);
