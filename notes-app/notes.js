const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Note added!'))
    } else {
        console.log(chalk.red.inverse('Title already exists!'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString() 
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    // notes.splice(notes.findIndex( (element) => element.title === title ),1)
    const updatedNotes = notes.filter((note) => note.title !== title)
    if (updatedNotes.length < notes.length) {
        saveNotes(updatedNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } else {
        console.log(chalk.red.inverse('Title does not exist!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes:'))
    notes.forEach((note) => {
        console.log(note)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if (!noteToRead) {
        console.log(chalk.red.inverse('Title not found!'))
    } else {
        console.log(chalk.green.inverse('Title: ' + noteToRead.title))
        console.log('Body: ' + noteToRead.body)
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}