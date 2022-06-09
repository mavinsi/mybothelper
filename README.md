<img src="https://img.shields.io/badge/Made%20with-NodeJS-green?style=plastic&logo=nodedotjs">
<div id="header" align="center">
  <img src="./imgs/icon.png" width="500"/> 
  <h3>MyBotHelper.JS</h3>

</div>


## 📚 About
facilitates the creation of bots via discord.js, the repository already has a main script that automatically synchronizes and executes all commands that are in the /cmds/ folder.

## 📥 Installing & Setting

1. First clone the repository ``git clone https://github.com/mavinsi/mybothelper``
2. install the necessary dependencies ``npm install``
3. Open the configuration file ``/config/bot.json``
4. Replace the spaces with the information (name and token) that was requested as below
```
{
    "name": "Enter your bot name here",
    "token": "Enter your bot token here"
}
```
## 🏃 Executing & First test

After having followed the installation and configuration steps correctly, your script is ready to be launched. 


to start the bot just type ``npm start`` and wait for the script to initialize load the commands and initialize completely.

if everything went well, you will receive a final message with the name of your bot informing you that it is online, now let's test for your luck the repository already comes with a simple hello world command included, simply add the bot to a server and type "hello"
 
## 🏗️ What is the structure of a command

Below is a simple command structure that responds to a "hello" message sent by any user with "Hello World!"

```
module.exports= {
    name: 'hello',
    description: 'simples hello world message',
    execute(message,args){

      // what will be executed will be here inside

        message.channel.send(`Hello world!`)
    }
}
```

the 'name' is basically the prefix that will be used to call that command, that is, if the 'name' is 'ping' every time I send a message to the bot written 'ping' the command will be executed and 'description' is basically the description of what that command will do, defining it is purely for organization.


everything between ``execute(){}`` will be executed when the command is called, to start let's make a command that will show us an answer in the terminal.

## 🧑‍🔧 How to build your first command

first let's create a file inside the /cmds/ folder, let's name it ``first.js`` and we will type inside it the following base code:
```
module.exports= {
    name: 'first',
    description: 'my first command',
    execute(){
   

    }
}
```

after having placed our base code now let's say what our command will do, as I said above, let's make it send us a message in the terminal, as we are using node.js let's use the console.log function.

``console.log('message I want to show')``

or directly on command

```
module.exports= {
    name: 'first',
    description: 'my first command',
    execute(){

   console.log('message I want to show')

    }
}
```

now we can save the file and run our bot with ``npm start`` if everything went right when we type in a group where the bot is the message "first" we will receive in the console the message: "message I want to show"