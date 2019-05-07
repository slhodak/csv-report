//  Server logic

//  receive json
//  produce CSV report
//  send back report in response (along with form?)

const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const formidable = require('express-formidable');
const csv = require('./csv');
app.use(formidable());
app.use(express.static(path.join(__dirname, path.normalize('../public'))));

app.listen(3000);


app.post('/', (req, res, next) => {  
  console.log(req.fields);
  fs.readFile(path.join(__dirname, path.normalize('../public/index.html')), (err, data) => {
    if (!err) {
      res.status(200);
      let template = '<p>' + req.fields.json + '</p>';
      res.end(data + template);
    } else {
      res.status(404);
      res.end();
    }
  });
});