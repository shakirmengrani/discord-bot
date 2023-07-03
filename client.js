const { Client, GatewayIntentBits } = require("discord.js");
const COMMANDS = require('./commands');
const EVENTS = require('./events');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ]
});

COMMANDS(client);
EVENTS(client);

module.exports = client;