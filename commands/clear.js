module.exports = {
    name: 'clear',
    description: "Clear messages!",
    async execute(message, args,){
        if(!message.member.hasPermission("ADMINISTRATOR")){
            return message.reply("**Du hast keine Rechte, diesen Command zu nutzen!**").catch(e=>console.log(e.stack.toString().red));
        }
            if(!args[0]) return message.reply("**Bitte gib die Anzahl der Nachrichten ein, die du löschen möchtest! OwO**");
            if(isNaN(args[0])) return message.reply("**Bitte Gib eine Richtige Zahl an! OwO**");
    
            if(args[0] > 100) return message.reply("**Du kannst nicht mehr, als `100` Nachrichten Löschen! OwO**");
            if(args[0] < 1) return message.reply("**Du musst mindestens, `eine` Nachricht Löschen! OwO**");
    
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            });
            return message.reply(`**Es Wurden** ${args[0]} ** Nachrichten Gelöscht! OwO**`);

    }
}