const express = require("express");
const { postForm } = require("../controllers/postForm");

const formRouter = express.Router();

formRouter.post("/submitForm", postForm);

module.exports = formRouter;
