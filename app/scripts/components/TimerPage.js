var React = require('react');
var Animation = require('react-addons-css-transition-group');
var NBButton = require('./NBItems').NBButton;
var NBTitle = require('./NBItems').NBTitle;
var NBEmpty = require('./NBItems').NBEmpty;

var Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <NBButton path="/" icon="icon-back" position="left"/>
                    <NBTitle text="Settings"/>
                    <NBEmpty position="right"/>
                </div>
            </div>
        )
    }
});

var Button = React.createClass({
    render: function() {
        return (
            <div>

            </div>
        )
    }
});

var PageContent = React.createClass({
    componentWillMount: function() {

    },
    render: function() {
        return (
            <div className="page">
                <div className="page-content">
                    <Navbar/>
                    <Animation transitionName={{
                        appear: "slideLeft-enter",
                        leave: "slideLeft-leave"
                    }}
                               transitionEnterTimeout={1000} transitionLeaveTimeout={500} transitionAppearTimeout={500}
                               transitionAppear={true} transitionLeave={true}>
                        <div className="content-block">
                            Content some text alalala ashdihaish uasodj iioash iodhias
                        </div>
                    </Animation>
                </div>
            </div>
        )
    }
});

module.exports = PageContent;