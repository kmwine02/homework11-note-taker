const notes = require("express").Router();
const fsUtils = require("../helpers/fsUtils");
const { v4: uuidv4 } = require('uuid');



// GET route to get all of the notes in db.json
notes.get("/notes", (req, res) => {
    fsUtils.readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    
});

// POST method to add a new note and save it to db.json
notes.post("/notes", (req, res) => {
    console.log(req.body);

   const { title, text } = req.body;

   if(req.body) {
       const newNote = {
           title,
           text,
           note_id:  uuidv4(),
       }

       fsUtils.readAndAppend(newNote, './db/db.json');
       res.json(newNote);
   } else {
       res.error("Error in adding the note");
   }
});

// notes.get("/notes/:note_id", (req, res) => {

// })

module.exports = notes;