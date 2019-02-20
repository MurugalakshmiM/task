var express = require("express");
var body_parser = require("body-parser");
var app = express();
app.use(body_parser.urlencoded({ extended: true })); 
app.post('/myaction', function(req, res) {
    res.send('You sent the name "' + req.body.name + '".'+'age is'+req.body.age);
  });
  
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000/');
});