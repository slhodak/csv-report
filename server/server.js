//  Server logic

//  receive json
//  produce CSV report
//  send back report in response (along with form?)

const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.listen(3000);

app.use(express.static(path.join(__dirname, path.normalize('../public'))));

app.post('/giveMeJson', (req, res) => {  
  fs.readFile(path.join(__dirname, path.normalize('../public/index.html')), (err, data) => {
    if (!err) {
      res.status(200);
      let template = '<p>blah blah blah</p>';
      res.end(data + template);
    } else {
      res.status(404);
      res.end();
    }
  });
});