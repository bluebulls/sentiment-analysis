var sentiment = require('sentiment');
var express = require('express');
var bodyParser = require('body-parser');
var app = express()
 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
       // Score: -2, Comparative: -0.666 
app.set('port',(process.env.PORT || 5000))
//console.log(app.get('port'))
app.listen(app.get('port'), function(){
	console.log('API is running on port', app.get('port'))
})
app.post('/analysis',function(req,res){

var r1 = sentiment(req.body.state);
if(r1.comparative > 0.3)
	res.send('positive')
else if(r1.comparative < -0.3)
	res.send('negative')
else
	res.send('neutral')
console.log(r1)
})

app.get('/',function(req,res){
	res.send("Welcome to Gaurav's Sentiment analysis API")
})

