// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = "https://img.shields.io/apm/l/vim-mode";
  console.log(licenseBadge);
}

const apacheLink = "https://www.apache.org/licenses/LICENSE-2.0.txt";
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
renderLicenseBadge();

module.exports = generateMarkdown;
