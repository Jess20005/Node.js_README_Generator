// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'project',
    message: 'What is your project name?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project.',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have?',
    name: 'license',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', "BSD 3", "None"],
  },
  {
    type: 'default',
    name: 'install',
    message: 'What command should be run to install dependencies?',
    default:'npm i',
  },
  {
    type: 'default',
    name: 'test',
    message: 'What command should be run to run test?',
    default:'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err =>{
        if (err)throw new Error('THERE WAS AN ERROR');

        console.log("Generating README")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README.md', answers)
        console.log(answers)
    })
}

// Function call to initialize app
init();
