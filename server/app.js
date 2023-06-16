const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const DUMMY_HABITS = [
  {
    title: "Exercise 1hr everyday",
    cue: "alarm at 2:00pm",
    craving: "to stop studying",
    action: "do exercise at the gym",
    reward: "get buff and tasty protein shake",
    streaks: 0,
  },
];

app.get('/', (req, res, next) => {
  res.json({habits: DUMMY_HABITS});
})

app.listen(8000, () => {
  console.log('Node server running on port 8000');
})



