//  Server logic

//  receive json
//  produce CSV report
//  send back report in response (along with form?)


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.listen(3000);

app.post('/giveMeJson', (req, res) => {
  res.status(200).send(req.body);
});