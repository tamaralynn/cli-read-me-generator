require("dotenv").config();
const axios = require("axios");
const token = process.env.GITHUB_TOKEN;


const api = {
  getUser(username) {
    
    let queryURL = `https://api.github.com/users/${username}`;

        return axios.get(queryURL, {
            headers:{
                "Authorization": `token ${token}`
            }
        })
    }
};

module.exports = api;
