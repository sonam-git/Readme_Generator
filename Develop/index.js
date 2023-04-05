// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "Project title ?",
    type: "input",
  },
  {
    name: "description",
    type: "input",
    message: "Project description ?",
  },
  {
    name: "installation",
    type: "input",
    message: "Installation instructions?",
  },

  {
    name: "usage",
    type: "input",
    message: "Project usage:",
  },
  {
    name: "contributing",
    type: "input",
    message: "Contribution info?",
  },
  {
    name: "license",
    type: "checkbox",
    message: "Which License is it using?",
    choices: ["ISC", "MIT", "APACHE"],
  },
  {
    name: "email",
    type: "input",
    message: "Your email address?",
  },
  {
    name: "github",
    type: "input",
    message: "Provide github username?",
  },
  {
    name: "tests",
    type: "input",
    message: "Please provide how you will run your test?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Success! A readme file has been created.");
    }
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    writeToFile("readme.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
