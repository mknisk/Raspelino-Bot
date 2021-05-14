const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'r!';

const fs = require('fs');

const memberCounter = require('./commands/counter/member-counter');

const MessageEmbed = require

const message = require

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//Global Chat




client.once('ready', () => {
    console.log('Raspelino is online!');
    client.user.setActivity('Raspel beim Coden zu!', { type: 'WATCHING'})
    memberCounter(client)
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === '・user');

    if(!welcomeRole) return;

    guildMember.roles.add(welcomeRole);
    const welcomeChannel = guildMember.guild.channels.cache.find((c) => c.name === '・📬・eingang')

if(!welcomeChannel) return;
welcomeChannel.send(`**Willkommen** <@${guildMember.user.id}> **wir Werden viel Spaß Haben! QwQ**`)
    
});   

client.on('message', message =>{
    if(!message.content.startsWith(prefix) ||  message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);    
    }

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args, Discord);
    }
    if(command === 'iq'){
        client.commands.get('iq').execute(client, message, args);
    } else if(command === 'gay'){
        client.commands.get('gay').execute(client, message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(client, message, args, Discord);
    } else if(command === 'einbruch'){
        client.commands.get('einbruch').execute(message, args, Discord);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args, Discord);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args, Discord);
    } else if(command === 'giveaway'){
        client.commands.get('giveaway').execute(client, message, args);
    } else if(command === 'umfrage'){
        client.commands.get('umfrage').execute(message, args, command, client, Discord);
    } else if(command === 'say'){
        client.commands.get('say').execute(client, message, args, Discord);
    }
    
    

});

client.login('ODM2MzA0MTQxNzU1MjIwMDcx.YIcC7Q.pm1oXXo_y0PUoPDKG8iJYM5z_wc');
