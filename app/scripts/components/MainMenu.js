var React = require('react');
var Animation = require('react-addons-css-transition-group');
var NBButton = require('./NBItems').NBButton;
var NBTitle = require('./NBItems').NBTitle;
var NBEmpty = require('./NBItems').NBEmpty;
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
    render: function() {
        return (
            <div className="navbar">
                <div className="navbar-inner">
                    <NBEmpty position="left"/>
                    <NBTitle text="Breath Cycle"/>
                    <NBButton path="/settings" icon="icon-bars" position="right"/>
                </div>
            </div>
        )
    }
});

var Button = React.createClass({
    propTypes: {
        path: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string.isRequired
    },
    render: function() {
        var path = this.props.path,
            icon = this.props.icon,
            text = this.props.text;
        return (
            <div className="menu-item">
                <Link className="link button-fill" to={path}>
                    <i className={("icon " + icon)}/>
                    <span>{text}</span>
                </Link>
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
                            <div className="list-block media-list">
                                <div className="buttons-menu">
                                    <div className="title-wrapper">
                                        <span className="titleP1">CrossFit </span>
                                        <span className="titleP2">Trainer</span>
                                    </div>

                                    <Button path="/TimerPage" icon="icon-timer" text="Таймер"/>
                                    <Button path="/TimerPage" icon="icon-timer" text="Начать тренировку"/>
                                    <Button path="/TimerPage" icon="icon-timer" text="Упражнения"/>
                                </div>
                            </div>
                        </div>
                    </Animation>
                </div>
            </div>
        )
    }
});

module.exports = PageContent;