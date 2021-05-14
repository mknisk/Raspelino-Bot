const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'einbruch',
  description: 'Brich ein!',
  async execute(message, args, Discord) {
    const replies = ['**Du bist in ein** `Mediamarkt` **Eingebrochen, und wurdest Nicht Erwischt!**', '**Du bist in ein** `Mediamarkt` **Eingebrochen, und wurdest Erwischt!** ⛓️', '**Du bist in ein** `Mediamarkt` **Eingebrochen, und wurdest Erwischt!** ⛓️', '**Du bist bei deiner** `Mutter` **Eingebrochen, und wurdest Erwischt! Das Gibt Schläge!** ⛓️', '**Du bist in ein** `Saturn` **eingebrochen, und wurdest Erwischt!** ⛓️', '**Du bist in ein** `Saturn` **eingebrochen, und wurdest nicht Erwischt!**', '**Du bist in ein** `Saturn` **eingebrochen, und Wurdest nicht Erwischt!**', 'Du bist zu `Dumm` zum einbrechen! ;)']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED')) {
      const newEmbed = new MessageEmbed() // create embed 
        .setTitle('⛓️ Einbruch')
        .setColor('BLUE')
        .setDescription(replies[result]);

      await message.channel.send(newEmbed); // send embed message
    } else {
      await message.channel.send(`**Einbruch** ``${replies[result]}`` OwO `); // no permissins so bot will default to a raw message
    }
  },
};