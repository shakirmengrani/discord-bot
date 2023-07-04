const { REST, Routes } = require("discord.js");
const { PING } = require("./commands/ping");
const { FUN } = require("./commands");

const rest = new REST().setToken(process.env.TOKEN);
const commands = [
    PING.data.toJSON(),
    FUN.data.toJSON()
]
module.exports = async (client) => {
    try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.SERVER_GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error("error", error);
	}
};