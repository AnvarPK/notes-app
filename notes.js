const fs = require('fs');

const getNotes = function () {
    return ['Anvar']
}

const addNote = function (title, body) {
    const notes = loadNotes();
    notes.push({
        title, body
    })
    saveNotes(notes);
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
    addNote
}