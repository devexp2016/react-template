(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var Animation = require('react-addons-css-transition-group');
var NBButton = require('./NBItems').NBButton;
var NBTitle = require('./NBItems').NBTitle;
var NBEmpty = require('./NBItems').NBEmpty;
var Router = require('react-router');
var Link = Router.Link;

var Navbar = React.createClass({
    displayName: 'Navbar',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'navbar' },
            React.createElement(
                'div',
                { className: 'navbar-inner' },
                React.createElement(NBEmpty, { position: 'left' }),
                React.createElement(NBTitle, { text: 'Breath Cycle' }),
                React.createElement(NBButton, { path: '/settings', icon: 'icon-bars', position: 'right' })
            )
        );
    }
});

var Button = React.createClass({
    displayName: 'Button',

    propTypes: {
        path: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string.isRequired
    },
    render: function render() {
        var path = this.props.path,
            icon = this.props.icon,
            text = this.props.text;
        return React.createElement(
            'div',
            { className: 'menu-item' },
            React.createElement(
                Link,
                { className: 'link button-fill', to: path },
                React.createElement('i', { className: "icon " + icon }),
                React.createElement(
                    'span',
                    null,
                    text
                )
            )
        );
    }
});

var PageContent = React.createClass({
    displayName: 'PageContent',

    componentWillMount: function componentWillMount() {},
    render: function render() {
        return React.createElement(
            'div',
            { className: 'page' },
            React.createElement(
                'div',
                { className: 'page-content' },
                React.createElement(Navbar, null),
                React.createElement(
                    Animation,
                    { transitionName: {
                            appear: "slideLeft-enter",
                            leave: "slideLeft-leave"
                        },
                        transitionEnterTimeout: 1000, transitionLeaveTimeout: 500, transitionAppearTimeout: 500,
                        transitionAppear: true, transitionLeave: true },
                    React.createElement(
                        'div',
                        { className: 'content-block' },
                        React.createElement(
                            'div',
                            { className: 'list-block media-list' },
                            React.createElement(
                                'div',
                                { className: 'buttons-menu' },
                                React.createElement(
                                    'div',
                                    { className: 'title-wrapper' },
                                    React.createElement(
                                        'span',
                                        { className: 'titleP1' },
                                        'CrossFit '
                                    ),
                                    React.createElement(
                                        'span',
                                        { className: 'titleP2' },
                                        'Trainer'
                                    )
                                ),
                                React.createElement(Button, { path: '/TimerPage', icon: 'icon-timer', text: 'Таймер' }),
                                React.createElement(Button, { path: '/TimerPage', icon: 'icon-timer', text: 'Начать тренировку' }),
                                React.createElement(Button, { path: '/TimerPage', icon: 'icon-timer', text: 'Упражнения' })
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = PageContent;

},{"./NBItems":2,"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group","react-router":"react-router"}],2:[function(require,module,exports){
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NBButton = React.createClass({
    displayName: 'NBButton',

    propTypes: {
        position: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string.isRequired,
        path: React.PropTypes.string.isRequired
    },
    render: function render() {
        var position = this.props.position,
            icon = this.props.icon,
            path = this.props.path;
        return React.createElement(
            'div',
            { className: position },
            React.createElement(
                Link,
                { className: 'icon icon-only', to: path },
                React.createElement('i', { className: "icon " + icon })
            )
        );
    }
});

var NBTitle = React.createClass({
    displayName: 'NBTitle',

    propTypes: {
        text: React.PropTypes.string.isRequired
    },
    render: function render() {
        var text = this.props.text;
        return React.createElement(
            'div',
            { className: 'center' },
            text
        );
    }
});

var NBEmpty = React.createClass({
    displayName: 'NBEmpty',

    propTypes: {
        position: React.PropTypes.string.isRequired
    },
    render: function render() {
        var position = this.props.position;
        return React.createElement(
            'div',
            { className: position },
            React.createElement(
                'a',
                { className: 'icon icon-only' },
                React.createElement('i', { className: 'icon ' })
            )
        );
    }
});

module.exports = {
    NBButton: NBButton,
    NBTitle: NBTitle,
    NBEmpty: NBEmpty
};

},{"react":"react","react-router":"react-router"}],3:[function(require,module,exports){
'use strict';

var React = require('react');
var Animation = require('react-addons-css-transition-group');
var NBButton = require('./NBItems').NBButton;
var NBTitle = require('./NBItems').NBTitle;
var NBEmpty = require('./NBItems').NBEmpty;

var Navbar = React.createClass({
    displayName: 'Navbar',

    render: function render() {
        return React.createElement(
            'div',
            { className: 'navbar' },
            React.createElement(
                'div',
                { className: 'navbar-inner' },
                React.createElement(NBButton, { path: '/', icon: 'icon-back', position: 'left' }),
                React.createElement(NBTitle, { text: 'Settings' }),
                React.createElement(NBEmpty, { position: 'right' })
            )
        );
    }
});

var Button = React.createClass({
    displayName: 'Button',

    render: function render() {
        return React.createElement('div', null);
    }
});

var PageContent = React.createClass({
    displayName: 'PageContent',

    componentWillMount: function componentWillMount() {},
    render: function render() {
        return React.createElement(
            'div',
            { className: 'page' },
            React.createElement(
                'div',
                { className: 'page-content' },
                React.createElement(Navbar, null),
                React.createElement(
                    Animation,
                    { transitionName: {
                            appear: "slideLeft-enter",
                            leave: "slideLeft-leave"
                        },
                        transitionEnterTimeout: 1000, transitionLeaveTimeout: 500, transitionAppearTimeout: 500,
                        transitionAppear: true, transitionLeave: true },
                    React.createElement(
                        'div',
                        { className: 'content-block' },
                        'Content some text alalala ashdihaish uasodj iioash iodhias'
                    )
                )
            )
        );
    }
});

module.exports = PageContent;

},{"./NBItems":2,"react":"react","react-addons-css-transition-group":"react-addons-css-transition-group"}],4:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;

var MainMenu = require('./MainMenu');
var TimerPage = require('./TimerPage');

var App = React.createClass({
    displayName: 'App',

    render: function render() {
        var path = this.props.path;
        console.log(path);
        return React.createElement(
            Router,
            { hash: true, history: hashHistory },
            React.createElement(Route, { path: '/', component: MainMenu }),
            React.createElement(Route, { path: 'TimerPage', component: TimerPage })
        );
    }
});

ReactDOM.render(React.createElement(App, { path: location.pathname }), document.getElementById('root'));

},{"./MainMenu":1,"./TimerPage":3,"react":"react","react-dom":"react-dom","react-router":"react-router"}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9jb21wb25lbnRzL01haW5NZW51LmpzIiwiYXBwL3NjcmlwdHMvY29tcG9uZW50cy9OQkl0ZW1zLmpzIiwiYXBwL3NjcmlwdHMvY29tcG9uZW50cy9UaW1lclBhZ2UuanMiLCJhcHAvc2NyaXB0cy9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxRQUFRLFFBQVEsT0FBUixDQUFSO0FBQ0osSUFBSSxZQUFZLFFBQVEsbUNBQVIsQ0FBWjtBQUNKLElBQUksV0FBVyxRQUFRLFdBQVIsRUFBcUIsUUFBckI7QUFDZixJQUFJLFVBQVUsUUFBUSxXQUFSLEVBQXFCLE9BQXJCO0FBQ2QsSUFBSSxVQUFVLFFBQVEsV0FBUixFQUFxQixPQUFyQjtBQUNkLElBQUksU0FBUyxRQUFRLGNBQVIsQ0FBVDtBQUNKLElBQUksT0FBTyxPQUFPLElBQVA7O0FBRVgsSUFBSSxTQUFTLE1BQU0sV0FBTixDQUFrQjs7O0FBQzNCLFlBQVEsa0JBQVc7QUFDZixlQUNJOztjQUFLLFdBQVUsUUFBVixFQUFMO1lBQ0k7O2tCQUFLLFdBQVUsY0FBVixFQUFMO2dCQUNJLG9CQUFDLE9BQUQsSUFBUyxVQUFTLE1BQVQsRUFBVCxDQURKO2dCQUVJLG9CQUFDLE9BQUQsSUFBUyxNQUFLLGNBQUwsRUFBVCxDQUZKO2dCQUdJLG9CQUFDLFFBQUQsSUFBVSxNQUFLLFdBQUwsRUFBaUIsTUFBSyxXQUFMLEVBQWlCLFVBQVMsT0FBVCxFQUE1QyxDQUhKO2FBREo7U0FESixDQURlO0tBQVg7Q0FEQyxDQUFUOztBQWNKLElBQUksU0FBUyxNQUFNLFdBQU4sQ0FBa0I7OztBQUMzQixlQUFXO0FBQ1AsY0FBTSxNQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsVUFBdkI7QUFDTixjQUFNLE1BQU0sU0FBTixDQUFnQixNQUFoQixDQUF1QixVQUF2QjtLQUZW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WUFBSyxTQUFTLFdBQVQsRUFBYjtZQUNJLG9CQUFDLEtBQUQsSUFBTyxNQUFLLEdBQUwsRUFBUyxXQUFXLFFBQVgsRUFBaEIsQ0FESjtZQUVJLG9CQUFDLEtBQUQsSUFBTyxNQUFLLFdBQUwsRUFBaUIsV0FBVyxTQUFYLEVBQXhCLENBRko7U0FESixDQUhjO0tBQVg7Q0FERCxDQUFOOztBQWFKLFNBQVMsTUFBVCxDQUNJLG9CQUFDLEdBQUQsSUFBSyxNQUFNLFNBQVMsUUFBVCxFQUFYLENBREosRUFFSSxTQUFTLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIEFuaW1hdGlvbiA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCcpO1xudmFyIE5CQnV0dG9uID0gcmVxdWlyZSgnLi9OQkl0ZW1zJykuTkJCdXR0b247XG52YXIgTkJUaXRsZSA9IHJlcXVpcmUoJy4vTkJJdGVtcycpLk5CVGl0bGU7XG52YXIgTkJFbXB0eSA9IHJlcXVpcmUoJy4vTkJJdGVtcycpLk5CRW1wdHk7XG52YXIgUm91dGVyID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyJyk7XG52YXIgTGluayA9IFJvdXRlci5MaW5rO1xuXG52YXIgTmF2YmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOQkVtcHR5IHBvc2l0aW9uPVwibGVmdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPE5CVGl0bGUgdGV4dD1cIkJyZWF0aCBDeWNsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPE5CQnV0dG9uIHBhdGg9XCIvc2V0dGluZ3NcIiBpY29uPVwiaWNvbi1iYXJzXCIgcG9zaXRpb249XCJyaWdodFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIHBhdGg6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaWNvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGF0aCA9IHRoaXMucHJvcHMucGF0aCxcbiAgICAgICAgICAgIGljb24gPSB0aGlzLnByb3BzLmljb24sXG4gICAgICAgICAgICB0ZXh0ID0gdGhpcy5wcm9wcy50ZXh0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJsaW5rIGJ1dHRvbi1maWxsXCIgdG89e3BhdGh9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9eyhcImljb24gXCIgKyBpY29uKX0vPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59KTtcblxudmFyIFBhZ2VDb250ZW50ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24oKSB7XG5cbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLz5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGlvbiB0cmFuc2l0aW9uTmFtZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyOiBcInNsaWRlTGVmdC1lbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmU6IFwic2xpZGVMZWZ0LWxlYXZlXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRW50ZXJUaW1lb3V0PXsxMDAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXs1MDB9IHRyYW5zaXRpb25BcHBlYXJUaW1lb3V0PXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcj17dHJ1ZX0gdHJhbnNpdGlvbkxlYXZlPXt0cnVlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1ibG9jayBtZWRpYS1saXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9ucy1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVAxXCI+Q3Jvc3NGaXQgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlUDJcIj5UcmFpbmVyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcGF0aD1cIi9UaW1lclBhZ2VcIiBpY29uPVwiaWNvbi10aW1lclwiIHRleHQ9XCLQotCw0LnQvNC10YBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHBhdGg9XCIvVGltZXJQYWdlXCIgaWNvbj1cImljb24tdGltZXJcIiB0ZXh0PVwi0J3QsNGH0LDRgtGMINGC0YDQtdC90LjRgNC+0LLQutGDXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwYXRoPVwiL1RpbWVyUGFnZVwiIGljb249XCJpY29uLXRpbWVyXCIgdGV4dD1cItCj0L/RgNCw0LbQvdC10L3QuNGPXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnZUNvbnRlbnQ7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKTtcbnZhciBMaW5rID0gUm91dGVyLkxpbms7XG5cbnZhciBOQkJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgcG9zaXRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgaWNvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBwYXRoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb24sXG4gICAgICAgICAgICBpY29uID0gdGhpcy5wcm9wcy5pY29uLFxuICAgICAgICAgICAgcGF0aCA9IHRoaXMucHJvcHMucGF0aDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwb3NpdGlvbn0+XG4gICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiaWNvbiBpY29uLW9ubHlcIiB0bz17cGF0aH0+PGkgY2xhc3NOYW1lPXtcImljb24gXCIgKyBpY29ufSAvPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBOQlRpdGxlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICB0ZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgICB9LFxuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5wcm9wcy50ZXh0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBOQkVtcHR5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHByb3BUeXBlczoge1xuICAgICAgICBwb3NpdGlvbjogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB0aGlzLnByb3BzLnBvc2l0aW9uO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Bvc2l0aW9ufT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpY29uIGljb24tb25seVwiPjxpIGNsYXNzTmFtZT1cImljb24gXCIvPjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIE5CQnV0dG9uOiBOQkJ1dHRvbixcbiAgICBOQlRpdGxlOiBOQlRpdGxlLFxuICAgIE5CRW1wdHk6IE5CRW1wdHlcbn07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBbmltYXRpb24gPSByZXF1aXJlKCdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnKTtcbnZhciBOQkJ1dHRvbiA9IHJlcXVpcmUoJy4vTkJJdGVtcycpLk5CQnV0dG9uO1xudmFyIE5CVGl0bGUgPSByZXF1aXJlKCcuL05CSXRlbXMnKS5OQlRpdGxlO1xudmFyIE5CRW1wdHkgPSByZXF1aXJlKCcuL05CSXRlbXMnKS5OQkVtcHR5O1xuXG52YXIgTmF2YmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOQkJ1dHRvbiBwYXRoPVwiL1wiIGljb249XCJpY29uLWJhY2tcIiBwb3NpdGlvbj1cImxlZnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxOQlRpdGxlIHRleHQ9XCJTZXR0aW5nc1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPE5CRW1wdHkgcG9zaXRpb249XCJyaWdodFwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBCdXR0b24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufSk7XG5cbnZhciBQYWdlQ29udGVudCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCkge1xuXG4gICAgfSxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci8+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRpb24gdHJhbnNpdGlvbk5hbWU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVhcjogXCJzbGlkZUxlZnQtZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlOiBcInNsaWRlTGVmdC1sZWF2ZVwiXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MTAwMH0gdHJhbnNpdGlvbkxlYXZlVGltZW91dD17NTAwfSB0cmFuc2l0aW9uQXBwZWFyVGltZW91dD17NTAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI9e3RydWV9IHRyYW5zaXRpb25MZWF2ZT17dHJ1ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250ZW50IHNvbWUgdGV4dCBhbGFsYWxhIGFzaGRpaGFpc2ggdWFzb2RqIGlpb2FzaCBpb2RoaWFzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRpb24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VDb250ZW50OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBSb3V0ZXIgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZXI7XG52YXIgUm91dGUgPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXInKS5Sb3V0ZTtcbnZhciBoYXNoSGlzdG9yeSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlcicpLmhhc2hIaXN0b3J5O1xuXG52YXIgTWFpbk1lbnUgPSByZXF1aXJlKCcuL01haW5NZW51Jyk7XG52YXIgVGltZXJQYWdlID0gcmVxdWlyZSgnLi9UaW1lclBhZ2UnKTtcblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICByZW5kZXI6ZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwYXRoID0gdGhpcy5wcm9wcy5wYXRoO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSb3V0ZXIgaGFzaCBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWluTWVudX0vPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiVGltZXJQYWdlXCIgY29tcG9uZW50PXtUaW1lclBhZ2V9Lz5cbiAgICAgICAgICAgIDwvUm91dGVyPlxuICAgICAgICApXG4gICAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgICA8QXBwIHBhdGg9e2xvY2F0aW9uLnBhdGhuYW1lfS8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG4iXX0=
