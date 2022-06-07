module.exports= {
    name: 'hello',
    description: 'simples hello world message',
    execute(message,args){
        message.channel.send(`Hello world!`)
    }
}