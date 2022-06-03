// DEPENDENCIES
// TODO: Include packages needed for this application
const markDown = require("./generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
// const licenses = [
//   "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
//   "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
//   "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
//   "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
// ];

// STATE - DATA

const generateReadme = ({
  github,
  email,
  title,
  description,
  license,
  dependencies,
  tests,
  usage,
  contribution,
}) => {
  const readme = `# ${title}

    
## Description
    
${description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation
To install the necessary dependencies, run the following command: 
        
    ${dependencies}

## Usage
${usage}

## License
${license}

## Contributing
${contribution}

## Tests
To run any tests, run the following command:

    ${tests}

## Questions
If you have any questions please contact me at ${email}
You can also find me on GitHub at this username: ${github}`;
  console.log(readme);
  fs.writeFile("README.md", readme, "utf8", (err) => {
    if (err) throw err;
    console.log("successful!");
  });
};
// TODO: Create an array of questions for user input
const questions = [
  "What is your GitHub username?",
  "What is your email address?",
  "What is the title of your project?",
  "Provide a short description of your project",
  "What kind of license should your project have?",
  "What command should be run to install dependencies?",
  "What command should be run to run tests?",
  "What does the user need to know about using the repo?",
  "What does the user need to know about contributing to the repo?",
];

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "github",
    },
    {
      type: "input",
      message: questions[1],
      name: "email",
    },
    {
      type: "input",
      message: questions[2],
      name: "title",
    },
    {
      type: "input",
      message: questions[3],
      name: "description",
    },
    {
      type: "list",
      message: questions[4],
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      message: questions[5],
      name: "dependencies",
      default: "npm i",
    },
    {
      type: "input",
      message: questions[6],
      name: "tests",
      default: "npm tests",
    },
    {
      type: "input",
      message: questions[7],
      name: "usage",
    },
    {
      type: "input",
      message: questions[8],
      name: "contribution",
    },
  ])
  .then((response) => {
    console.log(response);
    generateReadme(response);
    fs.writeFile("README.md", ``, (err) => {
      err ? console.log(err) : console.log("Success!");
    });
  });
// FUNCTIONS
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// INITIALIZATION
// Function call to initialize app
init();
