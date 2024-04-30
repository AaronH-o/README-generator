// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'GNU General Public License':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'MIT License':
      return 'https://choosealicense.com/licenses/mit/';
    case 'Eclipse Public License':
      return 'https://choosealicense.com/licenses/epl-2.0/';
  };
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return '';
  }

  return `## License <a name="license"></a>
${renderLicenseBadge()} ${license}
<${renderLicenseLink(license)}>
`;

}

function generateToC(license){
  if(license == 'None') {
    return `## Table of Contents
    1. [Description](#description)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Contribution](#contribution)
    5. [Test](#test)
    6. [GitHub](#github)
    7. [Email](#email)`
  }
  return `## Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contribution)
  5. [Test](#test)
  6. [License](#license)
  7. [GitHub](#github)
  8. [Email](#email)`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO: generate table of contents
  return `# ${data.title}

${generateToC(data.license)}

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
${renderLicenseSection(data.license)}
## GitHub <a name="github"></a>
${data.github}

## Email <a name="email"></a>
${data.email}
`;
}

module.exports = generateMarkdown;
