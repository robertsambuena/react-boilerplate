// admin routes
'use strict';

var express = require('express'),
    router = express();

router.get('/', function (req, res) {
    res.render('partner', { title: 'Home page - ReactJS!'});
});

module.exports = router;