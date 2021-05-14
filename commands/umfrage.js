module.exports = {
    name: 'umfrage',
    aliases: ['umfrage', 'umfragen'],
    permissions: [],
    description: 'creates a suggestion!',
    execute(message, args, command, client, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === '・📌・umfragen');
        if(!channel) return message.channel.send('**Error** `404 **!QwQ**`');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('🔼');
            msg.react('🔽');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}