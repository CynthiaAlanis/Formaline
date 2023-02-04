const express= require('express');
const router = express.Router();
const Display = require('./models/display');

router.get('/', (req,res)=>{
 Display.find({},(err,foundDisplay)=>{
  if (err) console.log(err);
  res.render('display/index.ejs',{
    display: foundDisplay,
  })
 }); 
});

module.exports= router;