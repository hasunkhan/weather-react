var express = require('express');

// Create our app
var app = express();
var port = process.env.PORT || 9005


app.use(express.static('public'));

app.listen(port, function () {
  console.log(`Express server is up on port 3000: ${port}`);
});
