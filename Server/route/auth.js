const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is Home page by router");
});

router.post("/signup", (req, res) => {
    console.log(req.body);
    res.json({Message: req.body});
    // res.send("This is Sign Up page");
  });

module.exports = router;
