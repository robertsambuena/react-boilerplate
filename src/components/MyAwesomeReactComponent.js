var React = require('react'),
  mui = require('material-ui'),
  MenuItem = mui.MenuItem,
  ThemeManager = new mui.Styles.ThemeManager(),
  LeftNav = mui.LeftNav;

var SomeAwesomeComponent = React.createClass({

    getInitialState: function() {
        return {
            menu_items : [
                { route: 'get-started', text: 'Get Started' },
                { route: 'customization', text: 'Customization' },
                { route: 'components', text: 'Components' },
                { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
                { 
                    type: MenuItem.Types.LINK, 
                    payload: 'https://github.com/callemall/material-ui', 
                    text: 'GitHub' 
                },
                { 
                    text: 'Disabled', 
                    disabled: true 
                },
                { 
                    type: MenuItem.Types.LINK, 
                    payload: 'https://www.google.com', 
                    text: 'Disabled Link', 
                    disabled: true 
                },
            ]
        };
    },

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function() {
        var i = 0;
        i = 123;
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },

    render: function() {
        return (
            <LeftNav menuItems={this.state.menu_items} />
        );
    }

});

module.exports = SomeAwesomeComponent;
