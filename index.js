// MyBotHelper 0.2
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
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

console.log(`# Welcome to MyBotHelper ${version}`);
console.log(`# github.com/mavinsi/mybothelper \n`);
console.log(`[MBH] Initializing...`);

client.on('ready', () => {
  client.commands.get('initial').execute(client);
  console.log(`[MBH] ${process.env.BOT_NAME} online`);
});
client.commands = new discord.Collection();

console.log(`[MBH] Loading commands...`);
const commandFiles = fs
  .readdirSync('./cmds/')
  .filter(file => file.endsWith('.js'));
console.log(commandFiles);
console.log(`[MBH] Commands loaded successfully`);

for (const file of commandFiles) {
  const command = require(`./cmds/${file}`);
  client.commands.set(command.name, command);
}

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
