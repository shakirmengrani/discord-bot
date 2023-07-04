const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    PING: {
        data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Hello Ping"),
        execute: async (interaction) => {
            console.log(interaction);
            await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        }
    }
}