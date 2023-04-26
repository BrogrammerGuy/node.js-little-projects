const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const noteExists = notes.filter( (el) => el.title == title && el.body == body)
    if (noteExists.length > 0) {
        console.log("Note already exists!")
        return
    }

    notes.push({
        title: title,
        body: body
    })

    saveNotes(notes)
}

const saveNotes = function (notes) {
    const notesJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesJSON)
}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote:addNote
}