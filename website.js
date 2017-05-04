var express = require('express');
var app = express();
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');



var path = __dirname + '/views/';
  
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',router);
  
router.get('/',function(req, res){
  res.sendFile(path + 'index.html');
});

router.post('/',function(req, res){
  console.log("incoming message:", req.body);
  // your code to do what ever you are supposed to do goes here
});
  
router.get('/product',function(req, res){
  res.sendFile(path + 'product.html');});
  
router.get('/about',function(req, res){
  res.sendFile(path + 'about.html');
});
  
app.use('*',function(req, res){
  console.log("404 was hit!", req.url);
  res.send('Error 404: Not Found!');
});
  
app.listen(3000,function(){
  console.log("Server running at Port 3000");
});

process.env.CISCOSPARK_ACCESS_TOKEN='YTUwMmQ2MTMtYjI5ZC00ZThhLWFmZmUtMTg0YTkxZGE5MzQyNzRlNjE5YTEtNGY3';
const assert = require(`assert`);
assert(process.env.CISCOSPARK_ACCESS_TOKEN, 'This example assumes you have set your access token as an environment variable');
const ciscospark = require(`ciscospark`);
/*ciscospark.rooms.create({title: `My second Room`})
  .then((room) => {
    ciscospark.messages.create({
      markdown:'Hello Hello from Reza',
      roomId: room.id
    })
    return Promise.all([
      ciscospark.memberships.create({
        roomId: room.id,
        personEmail: `rkajbaf@my.centennialcollege.ca`
      }),
      ciscospark.memberships.create({
        roomId: room.id,
        personEmail: `rkajbaf@eclipsetechnology.ca`
      }),
    ])
      .then(() => ciscospark.messages.create({
        markdown: `**Hi Everyone**`,
        roomId: room.id
      }));
     console.log(msCredentials.roomId.log()); 
  });
  */
 ciscospark.messages.create({markdown:'This is a test message from ciscospark.messages API',

    roomId:'Y2lzY29zcGFyazovL3VzL1JPT00vOTZiMTI3ZjAtMmY2ZS0xMWU3LThjYzEtNzc5MzE0ZDVjMWUy'
  })
 