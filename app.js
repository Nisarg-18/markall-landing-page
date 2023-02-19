require('dotenv').config();
const express = require("express");
const formRouter = require("./routes/formRoutes");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", formRouter);

module.exports = app;
