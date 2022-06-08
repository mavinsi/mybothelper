module.exports= {
    name: 'initial',
    description: 'this command runs automatically when starting the bot, can be used to configure status and other things.',
    
    execute(client){
        client.user.setActivity("I running MBH 1.6 on Discord.JS");
    }
}