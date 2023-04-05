// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)
    `;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`;
  } else {
    return " ";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return " ";
  } else {
    return `This project is covered under the ${license} license. `
    
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})
  
  ## Table of Contents:
  *  [Description](#description)
  *  [Installation](#installation)
  *  [Usage](#usage)
  *  [Contributing](#contributing)
  *  [Tests](#tests)
  *  [Questions](#questions)
  *  [License](#license)

### Description:
${data.description}
### Installation:
${data.installation}
### Usage:
${data.usage}
### Contributing:
${data.contributing}
### Tests:
${data.tests}
### Questions
 Have questions about this project?  
  * GitHub: https://github.com/${data.github}  
  * Email: ${data.email}

### License
${renderLicenseSection(data.license)}[${data.license}](${renderLicenseLink(data.license)})

`;
}

module.exports = generateMarkdown;