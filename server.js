var express = require ('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.post('./message/api',(req, res)=>{
    console.log(res.body);
    res.status(200);
})
app.use(express.static('./')).listen(5000);
console.log('5000');