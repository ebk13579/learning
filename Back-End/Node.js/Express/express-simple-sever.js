/*

https://github.com/xgqfrms-GitHub/webgeeker 

dist 

simple-static-web-server


G:\wwwRoot\learning\000projects\Express-Restful-API\app

*/



const express = require('express');
const app = express();


let port = 3000;

app.get('/', function(req, res){
    res.send('<h1><mark>hello world</mark></h1>');
});

app.listen(port, function(){
    console.log(`app listening on ${port} !`);
});





