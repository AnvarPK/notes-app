const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return ['Anvar']
}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    })
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

const removeNote = function (title) {
    const notes = loadNotes();
    const filteredNotes = notes.filter(function (note) {
        return note.title !== title;
    })
    if (notes.length > filteredNotes.length) {
        console.log(chalk.green.inverse('Note: ' + title + ', removed'));
        saveNotes(filteredNotes)
    }
    else {
        console.log(chalk.red.inverse('No note found'));
    }
}

const saveNotes = function (notes) {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = function () {
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