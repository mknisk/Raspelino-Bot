const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: 'gay',
  description: 'Berechnet den Gay % eines Users',
  async execute(client, message, args) {
    const replies = ['0% Gay! 🏳️‍🌈 ', '1% Gay! 🏳️‍🌈 ', '2% Gay! 🏳️‍🌈 ', '3% Gay! 🏳️‍🌈 ', '4% Gay! 🏳️‍🌈 ', '5% Gay! 🏳️‍🌈 ', `6% Gay! 🏳️‍🌈 `, `7% Gay! 🏳️‍🌈 `, `8% Gay! 🏳️‍🌈 `, `9% Gay! 🏳️‍🌈 `, `10% Gay! 🏳️‍🌈 `, `11% Gay! 🏳️‍🌈 `, `12% Gay! 🏳️‍🌈 `, `13% Gay! 🏳️‍🌈 `, `14% Gay! 🏳️‍🌈 `, `15% Gay! 🏳️‍🌈 `, `16% Gay! 🏳️‍🌈 `, `17% Gay! 🏳️‍🌈 `, `18% Gay! 🏳️‍🌈 `, `19% Gay! 🏳️‍🌈 `, `20% Gay! 🏳️‍🌈 `, `21% Gay! 🏳️‍🌈 `, `22% Gay! 🏳️‍🌈 `, `23% Gay! 🏳️‍🌈 `, `24% Gay! 🏳️‍🌈 `, `25% Gay! 🏳️‍🌈 `, `26% Gay! 🏳️‍🌈 `, `27% Gay! 🏳️‍🌈 `, `28% Gay! 🏳️‍🌈 `, `29% Gay! 🏳️‍🌈 `, `30% Gay! 🏳️‍🌈 `, `31% Gay! 🏳️‍🌈 `, `32% Gay! 🏳️‍🌈 `, `33% Gay! 🏳️‍🌈 `, `34% Gay! 🏳️‍🌈 `, `35% Gay! 🏳️‍🌈 `, `36% Gay! 🏳️‍🌈 `, `37% Gay! 🏳️‍🌈 `, `38% Gay! 🏳️‍🌈 `, `39% Gay! 🏳️‍🌈 `, `40% Gay! 🏳️‍🌈 `, `41% Gay! 🏳️‍🌈 `, `42% Gay! 🏳️‍🌈 `, `43% Gay! 🏳️‍🌈 `, `44% Gay! 🏳️‍🌈 `, `45% Gay! 🏳️‍🌈 `, `46% Gay! 🏳️‍🌈 `, `47% Gay! 🏳️‍🌈 `, `48% Gay! 🏳️‍🌈 `, `49% Gay! 🏳️‍🌈 `, `50% Gay! 🏳️‍🌈 `, `51% Gay! 🏳️‍🌈 `, `52% Gay! 🏳️‍🌈 `, `53% Gay! 🏳️‍🌈 `, `54% Gay! 🏳️‍🌈 `, `55% Gay! 🏳️‍🌈 `, `56% Gay! 🏳️‍🌈 `, `57% Gay! 🏳️‍🌈 `, `58% Gay! 🏳️‍🌈 `, `59% Gay! 🏳️‍🌈 `, `60% Gay! 🏳️‍🌈 `, `61% Gay! 🏳️‍🌈 `, `62% Gay! 🏳️‍🌈 `, `63% Gay! 🏳️‍🌈 `, `64% Gay! 🏳️‍🌈 `, `65% Gay! 🏳️‍🌈 `, `66% Gay! 🏳️‍🌈 `, `67% Gay! 🏳️‍🌈 `, `68% Gay! 🏳️‍🌈 `, `69% Gay! 🏳️‍🌈 `, `70% Gay! 🏳️‍🌈 `, `71% Gay! 🏳️‍🌈 `, `72% Gay! 🏳️‍🌈 `, `73% Gay! 🏳️‍🌈 `, `74% Gay! 🏳️‍🌈 `, `75% Gay! 🏳️‍🌈 `, `76% Gay! 🏳️‍🌈 `, `77% Gay! 🏳️‍🌈 `, `78% Gay! 🏳️‍🌈 `, `79% Gay! 🏳️‍🌈 `, `80% Gay! 🏳️‍🌈 `, `81% Gay! 🏳️‍🌈 `, `82% Gay! 🏳️‍🌈 `, `83% Gay! 🏳️‍🌈 `, `84% Gay! 🏳️‍🌈 `, `85% Gay! 🏳️‍🌈 `, `86% Gay! 🏳️‍🌈 `, `87% Gay! 🏳️‍🌈 `, `88% Gay! 🏳️‍🌈 `, `89% Gay! 🏳️‍🌈 `, `90% Gay! 🏳️‍🌈 `, `91% Gay! 🏳️‍🌈 `, `92% Gay! 🏳️‍🌈 `, `93% Gay! 🏳️‍🌈 `, `94% Gay! 🏳️‍🌈 `, `95% Gay! 🏳️‍🌈 `, `96% Gay! 🏳️‍🌈 `, `97% Gay! 🏳️‍🌈 `, `98% Gay! 🏳️‍🌈 `, `99% Gay! 🏳️‍🌈 `, `100% Gay! 🏳️‍🌈 `, `101% Gay!  🏳️‍🌈 QwQ`];

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED')) {
      const embed = new MessageEmbed() // create embed 
        .setTitle('🏳️‍🌈 Gay Berechner')
        .setColor('BLUE')
        .addField('Du bist zu', replies[result]);

      await message.channel.send(embed); // send embed message
    } else {
      await message.channel.send(`**Du bist zu:** ``${replies[result]}`` Gay! OwO `); // no permissins so bot will default to a raw message
    }
  },
};