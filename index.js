const { config } = require('dotenv');
config()

const CLIENT = require('./client');
const ROUTE = require('./routes');

ROUTE(CLIENT);
CLIENT.login(process.env.TOKEN);