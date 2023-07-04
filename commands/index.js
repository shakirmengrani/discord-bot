const { Collection } = require("discord.js");
const { PING } = require( "./ping");
const { FUN } = require( "./fun");

module.exports = {
    PING, 
    FUN,
    collect: (client) => {
        client.commands = new Collection();
        client.commands.set(PING.data.name, PING);
        client.commands.set(FUN.data.name, FUN);
    }
}