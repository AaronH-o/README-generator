// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO: generate table of contents
  return `# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Test](#test)
6. [License](#license)
7. [GitHub](#github)
8. [Email](#email)
${data.toc}

## Description <a name="description"></a>
${data.description}

## Installation <a name="installation"></a>
${data.installation}

## Usage <a name="usage"></a>
${data.usage}

## Contribution <a name="contribution"></a>
${data.contribution}

## Test <a name="test"></a>
${data.test}

## License <a name="license"></a>
${data.license}

## GitHub <a name="github"></a>
${data.github}

## Email <a name="email"></a>
${data.email}
`;
}

module.exports = generateMarkdown;
