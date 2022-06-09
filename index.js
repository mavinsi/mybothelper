// MyBotHelper 0.2
// https://github.com/mavinsi/mybothelper



// MBH Configs & dependencies
version = '0.2'
exports.version = version;
const botcfg = require('./config/bot.json')

// Dependencies
const fs = require('fs')
const discord = require('discord.js')

const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });


console.log(`# Welcome to MyBotHelper ${version}`)
console.log(`# github.com/mavinsi/mybothelper \n`)
console.log(`[MBH] Initializing...`)

client.on('ready', () => {
   client.commands.get('initial').execute(client)
    console.log(`[MBH] ${botcfg.name} online`);
});
client.commands = new discord.Collection();

console.log(`[MBH] Loading commands...`);
const commandFiles = fs.readdirSync('./cmds/').filter(file => file.endsWith('.js'))
console.log(commandFiles)
console.log(`[MBH] Commands loaded successfully`);

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
console.log(`[MBH] Waking up ${botcfg.name}...\n ----------------`)