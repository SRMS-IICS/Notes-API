const app = require('express')();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(bodyParser.json());

let notes = [];
let nextNoteID = 1;
let errorMessage = "";

//Create a note
app.post('/notes', (req, res) => {
    const { title, body } = req.body;

    //Validation
    validate(title, body);

    if (errorMessage){
        const err = errorMessage;
        errorMessage = "";
        return res.status(400).json({ error: err });
    }

    const newNote = {id: nextNoteID, title, body};
    notes.push(newNote);
    nextNoteID++;
    res.status(201).json(newNote);

}); 

// Retrieve all notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// Retrieve a specific note by ID
app.get('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const note = notes.find(note => note.id === id);

    if(!note) {
        return res.status(404).json({error: 'There is no note with the specified ID' });
    }

    res.json(note);

});

// Updates a note 
app.put('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, body } = req.body;
  
    const note = notes.find(note => note.id === id);
    
    //Validation
    if (!note) {
      return res.status(404).json({ error: 'There is no note with the specified ID' });
    }

    validate(title, body);

    if (errorMessage){
        const err = errorMessage;
        errorMessage = "";
        return res.status(400).json({ error: err });
    }
  
    note.title = title;
    note.body = body;
  
    res.json(note);
  });
  
  // Delete a note
  app.delete('/notes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = notes.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'There is no note with the specified ID' });
      }

    notes.splice(index, 1);

    res.sendStatus(204); 
  });
  
  // Validation checks for POST and PUT requests
  function validate(title, body) {

    if(!title || title.toString().trim().length === 0) {
        errorMessage = 'Title Required';
    }   
    
    if(!body || body.toString().trim().length === 0) {
        errorMessage = 'Body Required';
    }

    if(!title && !body || title.toString().trim().length === 0 && body.toString().trim().length === 0) {
        errorMessage = 'Title and Body Required';
    }  
  } 

  // Error handling 
  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).json({ error: 'Bad Request' });
    }

    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
  });
 
app.listen(PORT, 
    () => console.log(`Server is running on http://localhost:${PORT}`)
    );
