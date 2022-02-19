import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/newshop")
  .then(() => {
    console.log("connect OK");
    app.listen(1337, () => {
      console.log("Node server start");
    });
  })
  .catch(() => {
    console.log("connect NOT-OK");
  });


