// DEPENDENCIES
// TODO: Include packages needed for this application
const markdown = require("./generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");

// STATE - DATA

const generateReadme = ({
  github,
  email,
  title,
  description,
  dependencies,
  tests,
  usage,
  contribution,
}) => {
  const readme = `# ${title}
![GitHub License] (url)
    
## Description
    
Github: ${github}
${description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation
${dependencies}

## Usage
${usage}

## License

## Contributing
${contribution}

## Tests
${tests}

## Questions
If you have any questions please contact me at ${email}`;
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
      type: "input",
      message: questions[4],
      name: "license",
    },
    {
      type: "input",
      message: questions[5],
      name: "dependencies",
    },
    {
      type: "input",
      message: questions[6],
      name: "tests",
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
