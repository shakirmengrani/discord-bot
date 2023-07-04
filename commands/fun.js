const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    FUN: {
        data: new SlashCommandBuilder()
            .setName('fun')
            .setDescription('Send command')
            .addStringOption(option => option.setName('command').setDescription("put some commands there").setRequired(true)),
        async execute(interaction) {
            const cmd = interaction.options.getString("command")
            return interaction.reply({ content: `${interaction.user.username} run ${cmd}`, ephemeral: true });
        },
    }
}