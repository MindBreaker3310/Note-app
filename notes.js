console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes=()=>{
  try{
    var notesString=fs.readFileSync('notes-data.json');
    return notes=JSON.parse(notesString);
  }catch(e){
    return [];
  }
};

var saveNote=(notes)=>{
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote=(title,body)=>{
  var notes=fetchNotes();
  var note={
    title,
    body
  };
  var duplicateNote=notes.filter((note)=>note.title===title);
  if(duplicateNote.length===0){
    notes.push(note);
    saveNote(notes);
    return note;
  }
};

var getAll=()=>{
  return fetchNotes();
};
var getNote=(title)=>{
  console.log('getting all notes',title);
  var notes=fetchNotes();
  var filteredNote=notes.filter((note)=>note.title===title);
  return filteredNote[0];//回傳第一個 不然會回傳ARRAY
};
var removeNote=(title)=>{
  console.log('removeing notes',title);
  var notes=fetchNotes()
  var filteredNote=notes.filter((note)=>note.title!==title);
  saveNote(filteredNote);

  return notes.length!==filteredNote.length;
};

module.exports={
  addNote,
  getAll,
  getNote,
  removeNote
};
