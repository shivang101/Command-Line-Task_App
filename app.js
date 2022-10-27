const notes = require("./notes");
const yargs = require("yargs");

const chalk = require("chalk");
const { describe } = require("yargs");

// const command = process.argv[2];

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "Title of note to be deleted",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Lisiting Notes",
  handler: () => {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "reading a notes",
  builder: {
    title: {
      describe: "Title of all notes",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});
// console.log(process.argv);
yargs.parse();
// console.log(yargs.argv);
