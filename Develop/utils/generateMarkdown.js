// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License Link](https://opensource.org/licenses/${license})`,
  isEmpty()
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[License Section](##License)`,
  isEmpty()
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)


  ## Installation
  To install neccessary dependencies, run the following command:
  \`\`\`bash
  ${data.install}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Test
  To run test, run the following command:
  \`\`\`bash
  ${data.test}
  \`\`\`
 
  ## Questions
  If you have any questions about the repo, open an issues or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
