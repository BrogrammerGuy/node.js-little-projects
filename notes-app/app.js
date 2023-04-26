const chalk = require('chalk');
const yargs = require('yargs');
const notesUtils = require('./notes.js'); 

// Customize YARGS version
yargs.version('1.1.0')

// Create ADD Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.addNote(argv.title, argv.body)
    }
})

// Create REMOVE Command
yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    builder: {
        title: {
            describe: 'Note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.removeNote(argv.title)
    }
})

// Create READ Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.readNote(argv.title)
    }
})

// Create LIST Command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler() {
        notesUtils.listNotes()
    }
})
// Add, Remove, Read, List
yargs.parse()
//console.log(yargs.argv);