var express = require('express')

var app = express();

var Remarkable = require('remarkable');
var md = new Remarkable();

var handlebars = require('express-handlebars')
  .create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);



app.use('/static', express.static('public'))


app.get('/', function(req, res) {
  res.render('mainpage', { title: '메인 페이지' });
});


//404
app.use(function(req, res, next){
  res.type('text/plain');
  res.status(404);
  res.send('404 Error');
});
//500
app.use(function(err, req, res, next){
  res.type('text/plain');
  res.status(500);
  res.send('500 Error');
});

//Section Divider

app.listen(app.get('port'), function(){
  console.log('ㅁㄴㅇㄹ');
});
