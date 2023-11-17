// var express = require('express');
// var path = require('path');
// var app = express();

// app.get('/components', function(req,res){
//   res.render('content');
// })
// app.set('views',path.join(__dirname,'views'));
// app.set('view engine','pug');
// app.listen(4000);
const express = require('express');
const path = require('path');
const app = express();

// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
  res.render('content');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
