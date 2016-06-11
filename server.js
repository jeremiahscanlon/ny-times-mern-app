// ================================================================================
// load the things we need
// ================================================================================

var express = require('express');
var app = express();

// ================================================================================
// set the view engine
// ================================================================================


// ================================================================================
// ROUTES
// use res.render to load up an ejs view file
// ================================================================================

// load the static files in the public folder
var staticContentFolder = __dirname + '/public';
app.use(express.static(staticContentFolder));

// index page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// ================================================================================
// Start the server
// ================================================================================

var PORT = process.env.PORT || 8083;
app.listen(PORT, function() {
    console.log('Find the magic at port: ' + PORT);
});