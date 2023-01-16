const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();

const port = process.env.PORT || 3000;



const END_DATE = new Date("Monday, 20 February 2023 12:00:00")
const START_DATE = new Date()
const DIFF_TIME =  Math.abs(START_DATE - END_DATE)
const DAYS_LEFT = Math.ceil(DIFF_TIME / (1000 * 60 * 60 * 24)); 
const LEFT_DAYS_IN_S = DAYS_LEFT * 24 * 60 * 60 ;
let remainingTime = LEFT_DAYS_IN_S;

setInterval(()=>{
    remainingTime = remainingTime-1;
},1000)


app.use((err, req, res, next) => {
    res.status(404).send("Sorry, that page doesn't exist!",err);
  });
  


app.get('/api/remaining-time', (req, res) => {
  res.json({ remainingTime });
});

app.listen(port, () => {
  console.log('Server listening on port '+port);
});
