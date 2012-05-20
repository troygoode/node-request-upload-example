var request = require('request');
var fs = require('fs');

var serverUrl = 'http://localhost:3000';

var image = fs.readFileSync('./okay-face.jpeg');
var imageBuffer = new Buffer(image, 'binary');

request({
    method: 'POST'
  , uri: serverUrl
  , headers: {
      'content-type': 'multipart/form-data'
  }
  , multipart: [{
      'Content-Disposition': 'form-data; name="my_file"; filename="okay_face.jpeg"'
    , 'Content-Type': 'image/jpeg'
    , 'Content-Transfer-Encoding': 'base64'
    , body: imageBuffer
  }]
}, function(err){
  if(err) console.log(err);
});
