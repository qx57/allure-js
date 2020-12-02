var environments = require('./environments.json');
var environment = environments[process.env.ENV];
module.exports.environment = environment;

