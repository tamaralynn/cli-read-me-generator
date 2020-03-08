  const inquirer = require("inquirer");
  const fs = require("fs");
  const axios = require("axios");
  const util = require("util");

  const writeFileAsync = util.promisify(fs.writeFile);


  function promptUser() {
      return inquirer.prompt([{
              type: "input",
              message: "What's your Github username?",
              name: "username"
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

  let userName = userResponse.username;
  console.log(`Username: ${userName}`)

  const apiURL = `https://api.github.com/users/${userName}`

  let result = axios.get(apiURL)
  const gitData = result.data;

  const name = gitData.name;
  const url = gitData.url;
  const img = gitData.avatar_url;
  const email = gitData.email;
  console.log(`Name: ${name}`);
  console.log(`url: ${url}`);

  async function init() {
      console.log("hi")
      try {
          const answers = await promptUser();

          const readme = generateREADME(answers);

          await writeFileAsync("readme.md", md);

          console.log("Successfully wrote to readme.md");
      } catch (err) {
          console.log(err);
      }
  }


  init();