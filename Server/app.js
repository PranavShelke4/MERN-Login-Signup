const mongoose = require("mongoose");
const express = require("express");
const app = express();

// Db connect

const DB = 'mongodb+srv://pranav:1q2w3e4r5t6y7u@cluster0.5tdwyjm.mongodb.net/?retryWrites=true&w=majority';

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

