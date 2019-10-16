const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
module.exports = {
  target: 'serverless',
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};

// module.exports = {
//     webpack: config => {
//     const env = Object.keys(process.env).reduce((acc, curr) => {
//     acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
//     return acc;
//     }, {});
//     config.plugins.push(new webpack.DefinePlugin(env));
//     return config;
//     }
//     };
