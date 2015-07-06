'use strict';

var React = require('react');

 var Login = React.createClass({
    getInitialState: function() {},

    render: function() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <form action='/login' method='POST'>
                    <input type='text' name='username'/>
                    <input type='password' name='password'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
});

module.exports = Login;