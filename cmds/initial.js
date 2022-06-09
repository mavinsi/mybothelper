const mbhMain = require('../index.js');

const version = require('../package.json').version;

module.exports = {
  name: 'initial',
  description:
    'this command runs automatically when starting the bot, can be used to configure status and other things.',

  execute(client) {
    console.log(`[MBH] starting initial.js...`);

    client.user.setActivity(`I running MBH ${version} on Discord.JS`);
  },
};
