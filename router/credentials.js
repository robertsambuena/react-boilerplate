// admin routes
'use strict';

var express = require('express'),
    router = express(),
    React = require('react'),
    // login = React.createFactory(require(__dirname + '/../src/components/login/index.js'))
    components = React.createFactory(require(__dirname + '/../public/app.js'))
;

router.get('/', function (req, res) {
    var component = components.login({
        header: 'AIEOOOOU'
    });

    var html = React.renderToString(component);
    res.send(html);
});

module.exports = router;