// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
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
  }

  // use inquirer to fill in the fields of the data object

  // call writeToFile and pass in the object

}

// Function call to initialize app
init();
