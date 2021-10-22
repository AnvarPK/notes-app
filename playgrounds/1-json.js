const fs = require('fs');
const book = {
    title: 'Ego is Enemy',
    author: 'Ryan'
}

const bookJSON = JSON.stringify(book);
fs.writeFileSync('i-json.json', bookJSON);