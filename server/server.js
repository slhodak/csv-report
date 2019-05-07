//  Server logic

//  receive json
//  produce CSV report
//  send back report in response (along with form?)

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.listen(3000);

app.use(express.static(path.join(__dirname, path.normalize('../public'))));

app.post('/giveMeJson', (req, res) => {
  res.status(200).send(req.url);
});