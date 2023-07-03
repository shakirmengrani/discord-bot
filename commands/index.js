const { Collection } = require("discord.js");
const { PING } = require( "./ping");

module.exports = (client) => {
    client.commands = new Collection();
    client.commands.set(PING.data.name, PING);
};