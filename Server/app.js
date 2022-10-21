const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

//read json file
app.use(express.json());

// Rout Link
app.use(require('./route/auth'));

const PORT = process.env.PORT;

//Middlewares
const middlewares = (req, res, next) => {
    console.log('This is middlewares');
    next();
} 

app.get("/about", middlewares, (req, res) => {
  res.send("This is About page");
});

app.get("/contect", (req, res) => {
  res.send("This is Contect page");
});

app.get("/signin", (req, res) => {
  res.send("This is Sign In page");
});

app.listen(PORT, () => {
  console.log('server is runing at port 3000');
});

