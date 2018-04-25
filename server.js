var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './demo')));

app.listen(8080, (err,connect) => {
    if(err) console.log(err);
    else console.log(`Server started on port`,8080);
 });