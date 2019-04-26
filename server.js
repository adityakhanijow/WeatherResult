//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/src/'));

app.get('/', function(req,res) {
    console.log("anccc");
        // console.log(__dirname+'/src/index.html');
res.sendFile(path.join(__dirname+'/src/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(8081, function(err, res, port){
    console.log(err);
    console.log(res);
    console.log(port);

});