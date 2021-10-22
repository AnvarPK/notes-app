const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return ['Anvar']
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title)
    if (duplicateNotes.length === 0) {
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
    getNotes,
    addNote,
    removeNote
}