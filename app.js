console.log('Starting app');

const fs=require('fs');
const _=require('lodash');

const notes=require('./notes.js');
const yargs=require('yargs');

const titleOptions={
  describe:"NOTE的標題",
  demand:true,
  alias:'t'//別名
};
const bodyOptions={
  describe:"NOTE的內容",
  demand:true,
  alias:'b'//別名
};

const argv=yargs
  .command('add','新增NOTE',{
    title:titleOptions,
    body:bodyOptions
  })
  .command('list','show all',{
    title:titleOptions,
    body:bodyOptions
  })
  .command('read','just read it')
  .command('remove','del note',{
    title:titleOptions,
    body:bodyOptions
  })
  .help()
  .argv;



var command =process.argv[2];
console.log('command:',command);
console.log(process.argv);

if(command==='add'){
  console.log('Adding new node');
  var note=notes.addNote(argv.title,argv.body);
  if(note){
    console.log('note created');
    console.log(`title:${note.title} body:${note.body}`);
  }else{
    console.log('no new note');
  }
}else if(command==='list'){
  console.log('listing all note');
  var allNotes=notes.getAll();
  allNotes.forEach((n)=>{
    console.log(`title:${n.title} body:${n.body}`);
  });
}else if(command==='read'){
  console.log('reading all note');
  var note=notes.getNote(argv.title);
  if(note){
    console.log('note found');
    console.log(`title:${note.title} body:${note.body}`);
  }else{
    console.log('note not found');
  }
}else if(command==='remove'){
  var noteRemoved=notes.removeNote(argv.title);
  var message=noteRemoved?'Note was removed':'Note not found';
  console.log(message);
}else{
  console.log('command not recongnized');
}
