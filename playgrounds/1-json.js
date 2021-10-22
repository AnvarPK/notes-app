const fs = require('fs');
// const book = {
//     title: 'Ego is Enemy',
//     author: 'Ryan'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('i-json.json', bookJSON);

const dataBuffer = fs.readFileSync('i-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
data.name = "Anvar";
data.planet = "Mercury";
data.age = 28;

const saveData = JSON.stringify(data);
fs.writeFileSync('i-json.json', saveData);