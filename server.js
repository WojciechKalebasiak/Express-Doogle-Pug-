var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Pug configuration
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req,res){
    res.send('Hello');
})
app.get('/google-auth',function(req,res){
    res.render('googlelog');
});
app.post('/hackedbydoge', function(req,res){
    res.render('hackedbydoge', {
        user:{
        email:req.body.email,
        password:req.body.password
        }
    });
});
app.get('/first-template', function(req,res) {
    res.render('first-template');
});
app.listen(3000, function(){
    console.log('Listening on http://localhost:3000');
})