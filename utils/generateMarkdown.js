// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache License':
      return `'https://apache.org/img/asf-estd-1999-logo.jpg'`;
    case 'GNU General Public License':
      return `'https://www.gnu.org/graphics/gplv3-127x51.png'`;
    case 'MIT License':
      return `'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/1920px-MIT_logo.svg.png'`;
    case 'Eclipse Public License':
      return `'https://www.eclipse.org/eclipse.org-common/themes/solstice/public/images/logo/eclipse-foundation-grey-orange.svg'`;
  };
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache License':
      return 'https://apache.org/licenses/LICENSE-2.0';
    case 'GNU General Public License':
      return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    case 'MIT License':
      return 'https://mit-license.org/';
    case 'Eclipse Public License':
      return 'https://www.eclipse.org/legal/epl-2.0/';
  };
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return '';
  }
  return `## License <a name="license"></a><imgsrc=${renderLicenseBadge(license)} height="30"/>
${license}
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

function generateMarkdown(data) {

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
