var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NBButton = React.createClass({
    propTypes: {
        position: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired
    },
    render: function() {
        var position = this.props.position,
            icon = this.props.icon,
            path = this.props.path;
        return (
            <div className={position}>
                <Link className="icon icon-only" to={path}><i className={"icon " + icon} /></Link>
            </div>
        )
    }
});

var NBTitle = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    render: function() {
        var text = this.props.text;
        return (
            <div className="center">
                {text}
            </div>
        )
    }
});

var NBEmpty = React.createClass({
    propTypes: {
        position: React.PropTypes.string.isRequired
    },
    render: function() {
        var position = this.props.position;
        return (
            <div className={position}>
                <a className="icon icon-only"><i className="icon "/></a>
            </div>
        )
    }
});

module.exports = {
    NBButton: NBButton,
    NBTitle: NBTitle,
    NBEmpty: NBEmpty
};