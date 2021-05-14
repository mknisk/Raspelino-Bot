module.exports = {
    name: 'ban',
    descritption: "ban a member!",
    execute(message, args, Discord){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("**Du hast keine Rechte, diesen Command zu nutzen!**").catch(e=>console.log(e.stack.toString().red));
        }
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Bann')
        .setColor('BLUE')
        .setDescription(` ${args[0]} **Wurde Erfolgreich Gebannt! OwO**`)
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(newEmbed)

        }else{
            return message.reply("**Du kannst diese Person nicht Bannen! OwO**");
        }
        const reason = args[1] || "There was no reason!";

        
    }
}