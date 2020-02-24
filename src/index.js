const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//settings
app.set('port', process.env.PORT || 3000);

// Route
app.get('/', (req, res) => {
  res.send('home');
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected to DB!');
});

app.listen(3000, () => {
  console.log(`Server on port ${app.get('port')}`);
});
