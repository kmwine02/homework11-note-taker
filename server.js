const express = require("express");
const path = require('path');
const routes = require("./routes/index.js");


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);

app.use(express.static('public'));

// get * should return index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// get /notes should return the notes html
app.get('/notes', (req, res) => {
    console.log(res.body);
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});