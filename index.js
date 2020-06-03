const inquirer = require("inquirer");
const api = require("./api");
const util = require("util");
const generateREADME = require("./generateREADME")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser() {
    return inquirer.prompt([{
            type: "input",
            message: "What's your Github username?",
            name: "username"
        },
        {
            type: "input",
            message: "What's the email associated with that Github account?",
            name: "email"
        },
        {
            type: "input",
            message: "What's your project title?",
            name: "projectTitle"
        },
        {
            type: "input",
            message: "Please give description of your project.",
            name: "projectDescription"
        },
        {
            type: "input",
            message: "What are the steps required to install your project? Give step-by-step instructions to get the application running.",
            name: "installation"
        },
        {
            type: "input",
            message: "Provide instructions and examples for use.",
            name: "usage"
        },
        {
            type: "input",
            message: "List your collaborators, if any, with links to their GitHub profiles.\nIf you used any third-party assets that require attribution, list the creators with links to their primary platforms.",
            name: "credits"
        },
        {
            type: "input",
            message: "If you would like to add a licence for you respository, please input the one you would like here. Otherwise, proceed by clikcing enter",
            name: "license"
        },
        {
            type: "input",
            message: "If you would like write tests for your application. Then provide examples on how to run them. Otherwise, proceed by clikcing enter",
            name: "tests"
        },


    ])
}


async function init() {
    console.log("hi")
    try {
        const userResponse = await promptUser();
        const gitResponse = await api.getUser(userResponse.username, userResponse.email);
        userResponse.avatar_url = gitResponse.avatar_url;
        
        
        const readme = generateREADME(userResponse, gitResponse);

        await writeFileAsync("newreadme.md", readme);

        console.log("Successfully wrote to newreadme.md");
    } catch (err) {
        console.log(err);
    }
}




init();