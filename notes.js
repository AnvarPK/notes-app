const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find(note=> note.title===title)

    if (duplicateNote) {
        notes.push({
            title, body
        })
        saveNotes(notes);
        console.log('Note added');
    }
    else {
        console.log('Note title taken!');
    }

}

const readNote = (title) => {
    const notes = loadNotes();

    const duplicateNote = notes.find(note=> note.title===title)

    if (duplicateNote) {
       
        console.log(chalk.red.bold(duplicateNote.title));
        console.log(duplicateNote.body);
    }
    else {
        console.log('No Note exist!');
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title)
    if (notes.length > filteredNotes.length) {
        console.log(chalk.green.inverse('Note: ' + title + ', removed'));
        saveNotes(filteredNotes)
    }
    else {
        console.log(chalk.red.inverse('No note found'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => {
        console.log(note.title)
    });
}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (error) {
        return [];
    }

}

module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}