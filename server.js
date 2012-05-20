var express = require('express');
var app = express.createServer();

app.configure(function(){
  app.use(express.bodyParser()); // <-- automatically writes file data to disk
  app.use(app.router);
});

app.get('/', function(req, res){
  res.send(
      '<html>'
      + '<form method="post" enctype="multipart/form-data" action="/">'
        + '<p><input type="file" name="my_file" /></p>'
        + '<p><input type="submit" value="Upload" /></p>'
      + '</form>'
    + '</html>'
  );
});

app.post('/', function(req, res){
  console.log(req.files.my_file.path);
  res.send(req.files.my_file.path);
});

app.listen(3000);
console.log('express listening on 3000');
