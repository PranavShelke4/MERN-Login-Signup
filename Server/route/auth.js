const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("This is Home page by router");
});

//******************* Using Promises ***************** */

// router.post("/signup", (req, res) => {

//     const { name, email, number, password, cpassword } = req.body;

//     if(!name | !email | !number | !password | !cpassword ){
//        return res.status(442).json({ error: "Plase Fill the all Fillde" });
//     }

//     User.findOne({ email:email })
//       .then((userExist) => {
//         if(userExist){
//           return res.status(442).json({ error: "Email Already Exist" });
//         }

//         // Which data we want to store in data base. Here we want to specify
//         const user = new User({ name, email, number, password, cpassword });

//         user.save().then( () => {
//           return res.status(201).json({ message: "User Registered Successfuly" });
//         }).catch((err) => res.status(500).json({ error: "User Registion Failed"}));

//       }).catch((err) => { console.log(err); });

//   });

//******************* Using async await ***************** */

router.post("/signup", async (req, res) => {
  const { name, email, number, password, cpassword } = req.body;

  if (!name | !email | !number | !password | !cpassword) {
    return res.status(400).json({ error: "Plase Fill the all Fillde" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ error: "Email Already Exist" });
    }

    const user = new User({ name, email, number, password, cpassword });

    await user.save();

    res.status(201).json({ message: "User Registered Successfuly" });

  } catch (err) {
    console.log(err);
  }
});

// Login API

router.post("/signin", async (req, res) => {
  try {

    const { email, password } = req.body;

    if (!email | !password) {
      return res.status(400).json({ error: "Plase Fill the all Fillde" });
    }

    const userLogin = await User.findOne({ email: email, password: password });

    if (!userLogin) {
      res.status(400).json({ error: "inviald data" });
    } else {
      res.json({ error: "User Signin Successfuly" });
    }
    
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
