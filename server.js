const express = require("express");
const path = require('path');
const routes = require("./Develop/routes");


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

app.use(routes);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});