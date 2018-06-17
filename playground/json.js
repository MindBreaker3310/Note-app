console.log('starting json.js');

const fs=require('fs');

var originaNote={
  title:'some name',
  body:'some body'
};

 var originaNoteString=JSON.stringify(originaNote);
 fs.writeFileSync('notes.json',originaNoteString);

 var noteString=fs.readFileSync('notes.json');
 var note=JSON.parse(noteString);


console.log(typeof note);
console.log(note.title);
