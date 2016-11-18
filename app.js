var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

nunjucks.configure('views', {noCache:true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(express.static('public'));
app.use(express.static('bower_components'));


var routes = require('./routes');
app.use('/', routes);

//if we get here, it means we've already checked all other routes so it's an error

app.use(function(req,res,next){
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
})

app.use(function(err, req, res, next){
	res.status(err.status || 500);
  	console.error(err);
  	res.render('error');
})

app.listen(3000);
