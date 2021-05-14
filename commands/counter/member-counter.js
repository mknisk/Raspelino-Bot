module.exports = async (client) =>{
    const guild = client.guilds.cache.get('840274354381783101');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('840324610229928006');
        channel.setName(`・📋・Tolle Leute » ${memberCount}`);
        console.log('Update User Counter QwQ');
    }, 60000);
}