var express = require ('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use((req, res, next) => {
    console.log(`${req.method} resquest is made for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});
app.use(bodyParser.json());
app.post('/api/message',(req, res)=>{
    res.status(200);
    res.json(res.body);
    console.log(res.body);
})
app.use(express.static('./')).listen(5000);
console.log('Running on 5000');