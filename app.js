// const fs = require("fs");

// fs.writeFileSync("Notes.txt", "My Name is Shivang\n");

// fs.appendFileSync("Notes.txt", "I'm 21 Years Old");

//** "type" : "module"
// import { add, name } from "./utils.js";

const { add, name } = require("./utils.js");

const sum = add(4, -2);
console.log(sum);
console.log(name);

const getNotes = require("./notes");

const notes = getNotes();
console.log(notes);

const validator = require("validator");

console.log(validator.isURL("https://www.npmjs.com/package/validator"));
