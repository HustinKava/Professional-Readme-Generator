// Loading node modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [{
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need to enter a title';
            }
        }
    },
    {
        type: 'checkbox',
        name: 'toc',
        message: 'Choose what optional headings you would like',
        choices: ['Installation', 'Usage', 'Contribution', 'Test']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need to enter a description';
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions if needed',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the usage information for your project',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need provide the usage information for your project';
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select which License you would like to use:',
        choices: ['MIT', 'Apache 2.0', 'GNU v2.0', 'GNU v3.0', 'ISC']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you want to create a criteria for others to contribute to this project, please enter it'
    },
    {
        type: 'input',
        name: 'test',
        message: 'If you would like to include testing instructions please enter them here'
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Please enter your GitHub username',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need provide your GitHub username for your project';
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address here',
        validate: (value) => {
            if (value) {
                return true;
            } else {
                return 'You need provide your email address for your project';
            }
        }
    }

];

// function to write README file
function writeToFile(fileName, questions) {
    fileName = fs.writeFile('./README/README.md', generateMarkdown((questions)), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('README SUCCESSFULLY CREATED!')
        }
    })
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(response => {
            writeToFile('./README/README.md', response);
        });
};

// function call to initialize program
init();