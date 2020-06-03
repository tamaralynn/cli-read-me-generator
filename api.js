
const axios = require("axios");



const api = {
  getUser(username, email) {
    
    let queryURL = `https://api.github.com/users/${username}`;

        return axios.get(queryURL).then(function(gitResponse){
            const result = {
                avatar_url: gitResponse.data.avatar_url,
                email : (gitResponse.data.email) ? gitResponse.email : `${email}`
    }
    console.log(result)
    return result;
  })
}
}

module.exports = api;
