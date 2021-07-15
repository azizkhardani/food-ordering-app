const express = require('express');
// const db = require('./db');
const app = express();
const port = 3000;


app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });