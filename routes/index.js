const express = require("express");
const notesRouter = require("./notes");

const app = express();

app.use(notesRouter);

module.exports = app;
