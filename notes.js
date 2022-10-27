const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your Notes...";
};

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const data_string = dataBuffer.toString();
    return JSON.parse(data_string);
  } catch (e) {
    console.log(chalk.red(e.message));
    return [];
  }
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green(`Note with title ${title} added`));
  } else {
    console.log(chalk.red("Title Already Exists"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((el) => el.title != title);

  if (newNotes.length === notes.length) {
    console.log(chalk.red(`Note with the title "${title}" does not exist`));
  } else {
    saveNotes(newNotes);
    console.log(chalk.green(`Note with the title "${title}" removed`));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your Notes"));

  notes.forEach((element) => {
    console.log(element.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(`No note found with title ${title} in notes`);
  } else {
    console.log(chalk.blue(note.title));

    console.log(note.body);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
