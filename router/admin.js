// admin routes
'use strict';

var express = require('express'),
    router = express();

router.get('/', function (req, res) {
    res.render('admin', { title: 'Admin - ReactJS!'});
});

module.exports = router;