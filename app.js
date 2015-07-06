// main-app
'use strict';

var express = require('express'),
    app = express(),
    creds = require('./router/credentials'),
    admin = require('./router/admin'),
    partner = require('./router/partner')
;

app.set('view engine', 'jade');
    
app.get('/', function(req, res) {
    res.render('index', { title: 'Just do it - ReactJS!'});
});

app.use('/login', creds);

app.use('/dashboard', partner);

app.use('/admin', admin);

// public files
app.use('/public', express.static('public'));
app.use('/dist', express.static('dist'));

app.listen(3024);
