// function to generate markdown for README
function generateMarkdown(response) {

    return `

    # ${response.title}
    ![License](https://img.shields.io/badge/License%3A-${response.license}-blue.svg)

    ## Description
    ${response.description}

    ## Table Of Contents
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
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
    To view my other repositories or to connect with me on GitHub please visit *[GitHub](https://github.com/${response.GitHub}/)**
    If you have any questions please feel free to reach out to me at the following email: *${response.email}*

    ## License
    ![License](https://img.shields.io/badge/License%3A-${response.license}-blue.svg)
`;
}

module.exports = generateMarkdown;