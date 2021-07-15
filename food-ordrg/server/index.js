const express = require('express');
const db = require('./database');
const app = express();
const port = 3000;


app.use(express.json())
app.use(express.static(__dirname + "/../client/build"));
app.use(express.urlencoded({ extended: true }));

app.get('/api/restaurent', (req, res) =>{
  db.query("select * from restaurent",(err,rest)=>{
    if(err){
      res.send(err)
    }else{
      res.send(rest)
    }
  })
})

app.get('/sandwMc', (req, res) =>{
  db.query("select * from sandwichMc",(err,rest)=>{
    if(err){
      res.send(err)
    }else{
      res.send(rest)
    }
  })
})

app.get('/sandwKc', (req, res) =>{
  db.query("select * from sandwichKfc",(err,rest)=>{
    if(err){
      res.send(err)
    }else{
      res.send(rest)
    }
  })
})

app.get('/oneRest/:name', (req,res)=>{
 db.query('select * from restaurent where name=?',req.params.name,(err,rest)=>{
  console.log(req.params.name)

  if(err){
    res.send(err)
  }else{
    res.send(rest)
  }
 })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });