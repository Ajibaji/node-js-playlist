var bodyParser = require('body-parser');

var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kisck some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo', function(req, res){
    console.log("this is the GET page");
    res.render('todo', {todos: data});
  });

  app.post('/todo', urlencodedParser, function(req, res){
    console.log("this is the POST page");
    data.push(req.body);
    res.json(data);
  });

  app.delete('/todo/:item', function(req, res){
    
  });

};
