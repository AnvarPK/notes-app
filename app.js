const yargs = require('yargs');
const getNotes = require('./notes');
const notes = getNotes();

// const command = process.argv[2]

//customized yags version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log('Adding a new note');
    }
})

//remove add command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function(){
        console.log('Removing a new note');
    }
})

//List notes command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('Listing the notes');
    }
})

//Read a note command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log('Reading a note');
    }
})

console.log(yargs.argv);

