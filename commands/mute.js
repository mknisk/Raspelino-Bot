const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("**Du hast keine Rechte, diesen Command zu nutzen!**").catch(e=>console.log(e.stack.toString().red));
        }
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === '・user');
            let muteRole = message.guild.roles.cache.find(role => role.name === '・muted');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> **Wurde Gemuted! QwQ**`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> **Wird für** ${ms(ms(args[1]))} **Gemuted! QwQ**`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            return message.reply('**Ich konnte diese `Person` nicht Finden! QwQ**');
        }
    }
}
 