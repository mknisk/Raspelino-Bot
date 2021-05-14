const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'iq',
  description: 'Berechnet den IQ eines Users',
  async execute(client, message, args) {
    const replies = ['0', '1', '115', '30', '22', `88`, `17`, `140`, `63`, `7`, `59`, `78`, `-15`, `-7`, `134`, `46`, `66`, `Schwerbehindert`, `ID10T`, `-100.000.000`, `Imagine Schlau sein, wat is dat Schon?!`]; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED')) {
      const embed = new MessageEmbed() // create embed 
        .setTitle('🧠IQ Berechner')
        .setColor('BLUE')
        .addField('Dein IQ ist OwO:', replies[result]);

      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Dein IQ ist:** ``${replies[result]}`` OwO `); // no permissins so bot will default to a raw message
    }
  },
};