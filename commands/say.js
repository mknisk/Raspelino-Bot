const { MessageEmbed } = require ('discord.js');
module.exports = {
  name: "say",
  description: "Say a Word",
  execute(client, message, args, Discord) {  

    const sayEmbed = new Discord.MessageEmbed()
        .setDescription(args.join(" "))
        .setColor("BLUE");

    message.channel.send(sayEmbed)
}};