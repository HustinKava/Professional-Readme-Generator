// function to generate markdown for README
function generateMarkdown(response) {
    // if testing has no value it results in undefined, so we set it to an empty string
    let testing = '';
    // for each value inside of the array we want to create an unordered list
    //  for each start at 0 and end at last item
    response.toc.forEach(element => {
        console.log(element);
        testing += `- [${element}](#${element})\n`
    })
    return `
# ${response.title}
![License](https://img.shields.io/badge/License%3A-${response.license}-blue.svg)

## Description
${response.description}

## Table Of Contents
${testing}
- [Questions](#Questions)
- [License](#License)

## Installation
${response.installation}

## Usage
${response.usage}

## Contributions
${response.contribution}

## Tests
${response.test}

## Questions
To view my other repositories or to connect with me on GitHub please click **[Here](https://github.com/${response.GitHub}/)**
If you have any questions please feel free to reach out to me at the following email: *${response.email}*

## License
![License](https://img.shields.io/badge/License%3A-${response.license}-blue.svg)
`;
};

module.exports = generateMarkdown;

// Dynamically create table of contents
// Dynamically create ## Headers based on user input
// If ## Header confirmed then add response.test