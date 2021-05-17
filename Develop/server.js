 const express = require('express');
 const path = require('path');
 const fs = require('fs');
 
 const app = express();
 const PORT = 8080;

 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());  

 app.use(express.static("public"));
 
 app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
 app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));
 
 app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, '/db/db.json')));

 app.post('/api/notes', (req, res) => { 
     console.log(req.body);
     let newNote = req.body;

     newNote.id = new Date().getTime();

     let notes = JSON.parse(fs.readFileSync('./db/db.json'));

     notes.push(newNote);

     fs.writeFileSync('./db/db.json', JSON.stringify(notes));

     res.json(notes);
 });

 app.delete(/api/notes/:id,)



 
 
 
 
 
 
 
 
 
 
 
 
 app.listen(PORT, () => console.log('App is listening.'));