const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();

const port = process.env.PORT || 3000;

let remainingTime = 0;

app.use((err, req, res, next) => {
    res.status(404).send("Sorry, that page doesn't exist!",err);
  });
  


app.get('/api/remaining-time', (req, res) => {
  res.json({ remainingTime });
});

app.post('/api/remaining-time', express.json(), (req, res) => {

  remainingTime = req.body.remainingTime;
  res.json({ remainingTime });
});

app.listen(port, () => {
  console.log('Server listening on port 3000');
});
