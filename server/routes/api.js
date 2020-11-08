const express = require('express');
const router = express.Router();
const User = require('../model/user')
const mongoose = require('mongoose');
const user = require('../model/user');
const jwt = require('jsonwebtoken');

mongoose.connect('mongodb://localhost:27017/eventdb', {useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true}).then(() =>{
    console.log("DB connected !")
    }).catch(err =>{
        console.log("Error in DB connection !" + JSON.stringify(err, undefined,2));
    })


router.get('/', function(req, res){
    res.send('From API route')
})

router.post('/register', function(req, res){
    let userData = req.body;
    let user = new User(userData)
    console.log(`User: ${user}`);
    //res.send(user)

    user.save((error, registeredUser) =>{
        if(error){
            console.log("error in saving");
        }
        else{
          let payload  = {subject : registeredUser._id}
          let token = jwt.sign(payload, 'secretKey');
          res.status(200).send({token});
            //res.status(200).send(registeredUser )
        }
    })
})

router.post('/login', function(req, res){
    let userData = req.body;
    

    user.findOne({email: userData.email}, (error, user) =>{
        if(error){
            console.log(error);
        }
        else{
            if(!user){
                res.status(401).send('Invalid email')
            }
            else{
                if( user.password !== userData.password){
                    res.status(401).send('Invalid password')
                }
                else{
                  let payload  = {subject : user._id}
                  let token = jwt.sign(payload, 'secretKey');
                  res.status(200).send({token});
                    //res.status(200).send(user)
                }
            }
        }
            
    })
})

router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

  router.get('/special', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })
module.exports = router;
