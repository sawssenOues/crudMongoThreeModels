const route = require('express').Router();
const testconn = require('../database/connect')

route.get('/',(req,res)=>{
   
     res.send("welcome to api")
});


route.post('/studentadd',(req,res)=>{
   
     res.send("welcome to api")
});

module.exports = route


