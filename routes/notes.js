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
           id:  uuidv4(),
       }

       fsUtils.readAndAppend(newNote, './db/db.json');
       res.json(newNote);
   } else {
       res.error("Error in adding the note");
   }
});

// deletes the note based on the note id 
notes.delete("/notes/:id", (req, res) => {
    const noteID = req.params.id;
    console.log(req.params.id);
    fsUtils.readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all tips except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteID);

      // Save that array to the filesystem
      fsUtils.writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item ${noteID} has been deleted 🗑️`);
    });
})

module.exports = notes;