const notes = require("express").Router();
const fsUtils = require("../helpers/fsUtils");


// GET route to get all of the notes in db.json
notes.get("/api/notes", (req, res) => {
    fsUtils.readFromFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
})


// POST method to add a new note and save it to db.json

module.exports = notes;