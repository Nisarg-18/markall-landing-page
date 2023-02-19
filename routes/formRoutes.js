const { home } = require("../controllers/homeController");

const express = require("express");
const { postForm } = require("../controllers/postForm");

const formRouter = express.Router();

formRouter.get("/", home);
formRouter.post("/submitForm", postForm);

module.exports = formRouter;
