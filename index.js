const { Client, Intents, DiscordAPIError } = require('discord.js');
const fs = require('fs')
const discord = require('discord.js')
const botcfg = require('./config/bot.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });





console.log(`[DBS] Initializing...`)
client.on('ready', () => {
  
    console.log(`[DBS] ${botcfg.name} online`);
});

client.commands = new discord.Collection();
console.log(`[DBS] Checking and reading command folder...`);
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
  
  const command = require(`./cmds/${file}`)
   client.commands.set(command.name, command)
}

client.on('messageCreate', async message => {

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);



    for(const file of commandFiles){
      const command = require(`./cmds/${file}`)
      if(cmd === command.name){

      console.log(`[BOT] Executing ${command.name}.js command`)
      client.commands.get(command.name).execute(message,args)
    }
    }


});
client.login(botcfg.token)
console.log(`[DBS] Base structure loaded successfully`)
console.log(`[DBS] Waking up ${botcfg.name}...\n ----------------`)