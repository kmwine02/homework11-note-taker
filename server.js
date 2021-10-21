const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// get * should return index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/develop/public/index.html'));
});

// get /notes should return the notes html
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './develop/public/notes.html'))
});

// get /api/notes reads db.json and returns all saved notes
// app.get('/api/notes', (req, res) => {
//     readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
// });

// post /api/notes receives a new note and saves it to the db json file 
// app.post('/api/notes', (req, res) => {

// });

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});