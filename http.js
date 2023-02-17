const axios = require('axios');
const fs = require('fs');

const configPath = require('os').homedir() + '/generator.cli.config.json';

let cliConfig = {};
let configFileContent = fs.readFileSync(configPath);
if (configFileContent) {
  cliConfig = JSON.parse(configFileContent);
}

const Request = async (method, endpoint, data, BaseURL = cliConfig.GeneratorURL) => {
  // if (AuthService.auth == null) AuthService.fillAuthData();
  // if (!AuthService.auth || !AuthService.auth.user) throw 'User not signed in.';

  if (!BaseURL) {
    return Promise.reject(`Error: ${method} baseURL=${BaseURL} should be configured check (config url)`);
    //throw new Error('baseURL should be configured check (config url)')
  }

  try {
    let response = await axios(BaseURL + endpoint, {
      method,
      data,
    headers: {
        // 'Content-Type': 'application/json'
        // Authorization: `Bearer ${AuthService.auth?.BearerToken}`
      }
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      // console.log(error.response.data);
      throw error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      throw error.request;
  } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
      throw error;
  }
  }
};

module.exports.get = async (endpoint, baseURL) => {
  await Request('GET', '/Generator/ClearCache', null, baseURL);
  return await Request('GET', endpoint, null, baseURL);
};
module.exports.post = async (endpoint, data, baseURL) => {
  await Request('GET', '/Generator/ClearCache', null, baseURL);
  return await Request('POST', endpoint, data, baseURL);
};
