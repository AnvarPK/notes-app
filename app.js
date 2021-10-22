const yargs = require('yargs');
const notes = require('./notes');

// const command = process.argv[2]

//customized yags version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            descript: 'Note title',
            demandOption: true, //the title option is required
            type: 'string', //supported type
        },
        body: {
            descript: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//remove add command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: function (argv) {
        console.log('Removing a new note!', argv);
    }
})

//List notes command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        console.log('Listing the notes');
    }
})

//Read a note command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note');
    }
})

// console.log(yargs.argv);ks
yargs.parse()
