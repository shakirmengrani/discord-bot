const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    PING: {
        data: new SlashCommandBuilder()
        .setName("haha")
        .setDescription("Hello Ping"),
        execute: async (interaction) => {
            await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        }
    }
}