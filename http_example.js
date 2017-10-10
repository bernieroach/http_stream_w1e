var https = require('https');


var options = {
  host: 'www.example.org',
  path: '/'
};

// called by https when the request is made.
// var callback = function() {
//   console.log('In response handler callback!');
// }

// called by https when the request is made.
var callback = function(response) {
  console.log('In response handler callback!');
//  console.log('Response: ', response);

  response.on('data', function(chunk){
    console.log('\n--------------CHUNKS! -- '  + chunk.length );
    console.log(chunk.toString());
  });
}

//callback = null;

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");

