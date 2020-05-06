const axios = require("axios");
const process = require("dotenv");


const api = {
  getUser(username) {
    let token = process.env.GITHUB_TOKEN; 
    let apiURL = `https://api.github.com/users/${username}`;

        return axios.get(apiURL, {
            headers:{
                "Authorization": `token ${token}`
            }
        })
    }
};

module.exports = api;
