// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  // Question #1 - Project Title
  {
    name: "title",
    message: "Enter your project's title:",
    type: "input",
  },
  // Question #2 - Project Description
  {
    name: "description",
    type: "input",
    message: "Enter a brief description of your project:",
  },
  // Question #3 - Installation
  {
    name: "installation",
    type: "input",
    message: "Enter installation instructions for your project:",
  },
  // Question #4 - Usage
  {
    name: "usage",
    type: "input",
    message: "Enter usage information for your project:",
  },
  // Question #5 - Contribution
  {
    name: "contributing",
    type: "input",
    message: "Enter your contribution guidelines for this project:",
  },
  // Question #6 - Test
  {
    name: "tests",
    type: "input",
    message: "Enter your testing guidelines for this project:",
  },
  // Question #7 - Software License
  {
    name: "license",
    type: "checkbox",
    message: "Choose a software license for this project:",
    choices: ["ISC", "MIT", "APACHE", "GPL"],
  },
  // Question #8 - Github Username
  {
    name: "github",
    type: "input",
    message: "Enter your github username:",
  },
  // Question #9 - Email
  {
    name: "email",
    type: "input",
    message: "Enter your email address:",
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
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
