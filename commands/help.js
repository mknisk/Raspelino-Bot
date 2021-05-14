const { MessageEmbed } = require ('discord.js');
module.exports = {
	name: 'help',
	description: "help command",
	execute(client, message, args, Discord) {
		const newEmbed = new Discord.MessageEmbed()
		.setColor('#00B7FF')
		.setDescription('Bot Commands ! QwQ')
		.addFields(
			{name: 'r!iq', value: '`Berechnet dein IQ ! QwQ`'},
			{name: 'r!gay', value: '`Berechnet wie Gay du bist ! QwQ`'},
			{name: 'r!einbruch', value: '`Wirst du beim überfall Erwischt ?! QwQ`'}

		)
		.setThumbnail('https://cdn.discordapp.com/attachments/837324220807512174/838194221705592832/Bot_yay_lgooooo_-_Kopie.png')
		.setFooter('QwQ');

		message.channel.send(newEmbed)
	}
	

}