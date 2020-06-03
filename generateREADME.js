const fs = require("fs");

function generateREADME(userResponse, gitResponse) {
    const username = userResponse.username;
    const email = gitResponse.email;
    const img = gitResponse.avatar_url;
    console.log(`Username: ${username}`)

    fs.writeFile("newreadme.md",
        `![badge](https://img.shields.io/badge/<hello>-<${username}>-<ff69b4>)
        
# ${userResponse.projectTitle}
${userResponse.projectDescription}
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
* [Tests](#Tests)
## Installation
${userResponse.installation}
## Usage
${userResponse.usage}
## Credits
${userResponse.credits}
## License 
${userResponse.license}
## Tests
${userResponse.tests}
## Questions 
![GitHub Logo](${img})
Email: [${email}](${email})
`,
        function(err) {

            if (err) {
                return console.log(err);
            }
        });

}

module.exports = generateREADME;