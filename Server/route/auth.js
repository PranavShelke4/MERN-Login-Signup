const express = require("express");
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get("/", (req, res) => {
    res.send("This is Home page by router");
});

router.post("/signup", (req, res) => {

    const { name, email, number, password, cpassword } = req.body;

    if(!name | !email | !number | !password | !cpassword ){
       return res.status(442).json({ error: "Plase Fill the all Fillde" });
    }

    User.findOne({ email:email })
      .then((userExist) => {
        if(userExist){
          return res.status(442).json({ error: "Email Already Exist" });
        }

        // Which data we want to store in data base. Here we want to specify
        const user = new User({ name, email, number, password, cpassword });

        user.save().then( () => {
          return res.status(201).json({ message: "User Registered Successfuly" });
        }).catch((err) => res.status(500).json({ error: "User Registion Failed"}));

      }).catch((err) => { console.log(err); });


  });

module.exports = router;
