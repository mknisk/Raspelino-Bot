module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("**Du hast keine Rechte, diesen Command zu nutzen!**").catch(e=>console.log(e.stack.toString().red));
        }
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === '・user');
            let muteRole = message.guild.roles.cache.find(role => role.name === '・muted');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> **Wurde Geunmuted! QwQ**`);
        } else{
            message.channel.send('**Ich konnte diese `Person` nicht Finden! QwQ**');
        }
    }
}