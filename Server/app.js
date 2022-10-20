const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Db connect

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useNewUrlParser: true
}).then(() => {
  console.log('Connection Succesful');
}).catch((err) => console.log('Connection failed'));

const middlewares = (req, res, next) => {
    console.log('This is middlewares');
    next();
} 

app.get("/", (req, res) => {
  res.send("This is Home page");
});

app.get("/about", middlewares, (req, res) => {
  res.send("This is About page");
});

app.get("/contect", (req, res) => {
  res.send("This is Contect page");
});

app.get("/signin", (req, res) => {
  res.send("This is Sign In page");
});

app.get("/signup", (req, res) => {
  res.send("This is Sign Up page");
});

app.listen(3000, () => {
  console.log("server is runing on local host 3000");
});

