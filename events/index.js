const { Events } = require("discord.js");
const { READY } = require("./ready");
const { INTERACTION_CREATE } = require("./interactionCreate");
const { ClientReady, InteractionCreate } = Events;

module.exports = (client) => {
    client.once(ClientReady, READY);
    client.on(InteractionCreate, INTERACTION_CREATE);
}