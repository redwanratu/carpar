const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

const app = require('./app');
//locate config File
dotenv.config({ path: './config.env' });

// connect database
const DB = process.env.DB;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('database connected');
  });

  // connect frontend
var resolvedPath = path.resolve(__dirname, "./client/build");
app.use(express.static(resolvedPath));

console.log(resolvedPath);
console.log(__dirname, "/client/build");

app.get("*", function(_, res) {
  res.sendFile(
    resolvedPath,
    function (err) {
      if (err) {
        res.status(500).send(err)
      }
    }
  )
})

//Server Running
//const port = process.env.PORT || 5000;
const port =  10000 || process.env.PORT;
app.listen(port, () => {
  console.log(`server listenning at ${port}....`);
});
