module.exports = {
    name: 'kick',
    descritption: "kick a member!",
    execute(message, args, Discord){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("**Du hast keine Rechte, diesen Command zu nutzen!**").catch(e=>console.log(e.stack.toString().red));
        }
        const kickEmbed = new Discord.MessageEmbed()
        .setTitle('Kick')
        .setColor('BLUE')
        .setDescription(` ${args[0]} **Wurde Erfolgreich Gekickt! OwO**`)
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send(kickEmbed)

        }else{
            return message.reply("**Du kannst diese Person nicht Kicken! OwO**");
        }
            
        
    }
}