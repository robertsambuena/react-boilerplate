// admin routes
'use strict';

var express = require('express'),
    router = express();

router.get('/callback', function (req, res) {
    console.log(req.query.type);
    if (req.query.type === 'admin') {
        res.redirect('/admin');
    }
    else {
        res.redirect('/dashboard');
    }
});

module.exports = router;