// MyBotHelper 0.3.0
// https://github.com/mavinsi/mybothelper

// Pull dot env file
require('dotenv').config();

// MBH Configs & dependencies
version = require('./package.json').version;

// Dependencies
const fs = require('fs');
const discord = require('discord.js');
const { Client, Intents, DiscordAPIError } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
});

console.log(`# Welcome to MyBotHelper ${version}`);
console.log(`# github.com/mavinsi/mybothelper \n`);
console.log(`[MBH] Initializing...`);


client.commands = new discord.Collection();
// Commands files loading

console.log(`[MBH] Loading commands...`);
const commandFiles = fs
  .readdirSync('./cmds/')
  .filter(file => file.endsWith('.js'));
  console.log(commandFiles);
  console.log(`[MBH] Commands loaded successfully`);
const eventscommandFiles = fs
  .readdirSync('./cmds/events/')
  .filter(file => file.endsWith('.js'));
console.log(eventscommandFiles);
console.log(`[MBH] Events loaded successfully`);
for (const file of eventscommandFiles) {
  const eventscommand = require(`./cmds/events/${file}`);
  client.commands.set(eventscommand.name, eventscommand);
}
for (const file of commandFiles) {
  const command = require(`./cmds/${file}`);
  client.commands.set(command.name, command);
}

// Events  

client.on('ready', () => {
  client.commands.get('initial').execute(client);
  console.log(`[MBH] ${process.env.BOT_NAME} online`);
});
client.on("guildMemberAdd", guildMember => {
    client.commands.get('new_member').execute(client);
});

client.on("guildMemberRemove", guildMember => {
  client.commands.get('exit_member').execute(client);
});
client.on('messageCreate', async message => {
  let messageArray = message.content.split(' ');
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  for (const file of commandFiles) {
    const command = require(`./cmds/${file}`);
    if (cmd === command.name) {
      console.log(`[BOT] Executing ${command.name}.js command`);
      client.commands.get(command.name).execute(message, args);
    }
  }
});
client.login(process.env.BOT_TOKEN);
console.log(`[MBH] Waking up ${process.env.BOT_NAME}...\n ----------------`);
