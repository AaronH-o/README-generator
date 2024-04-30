// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('node:fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
  'Project Title: ',
  'Description: ',
  'Installation Instructions:',
  'Usage Information: ',
  'Contribution Guidelines: ',
  'Test Instructions: ',
  'License: ',
  'GitHub Username: ',
  'Email: '    
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), err => {
    if(err) {
      console.error(err);
    } else {
      console.log('file written succesfully');
    }
  })
}

// function to initialize app
function init() {
  let data = {
    title: '',
    description: '',
    installation: '',
    usage: '',
    contribution: '',
    test: '',
    license: '',
    github: '',
    email: '',
    toc: '',
  }

  // use inquirer to fill in the fields of the data object
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: questions[0],
      },
      {
        name: "description",
        type: "input",
        message: questions[1],
      },
      {
        name: "installation",
        type: "input",
        message: questions[2],
      },
      {
        name: "usage",
        type: "input",
        message: questions[3],
      },
      {
        name: "contribution",
        type: "input",
        message: questions[4],
      },
      {
        name: "test",
        type: "input",
        message: questions[5],
      },
      {
        name: "license",
        type: "list",
        message: questions[6],
        choices: ["None", "GNU General Public License", "MIT License", "Apache License", "Eclipse Public License"],
      },
      {
        name: "github",
        type: "input",
        message: questions[7],
      },
      {
        name: "email",
        type: "input",
        message: questions[8],
      },
    ])
    .then((answer) => {
      data.title = answer.title;
      data.description = answer.description;
      data.installation = answer.installation;
      data.usage = answer.usage;
      data.contribution = answer.contribution;
      data.test = answer.test;
      data.license = answer.license;
      data.github = answer.github;
      data.email = answer.email;

      // call writeToFile and pass in the object
      writeToFile(data.title.replace(/ /g,'-')+'-README.md', data);
    })
}

// Function call to initialize app
init();
