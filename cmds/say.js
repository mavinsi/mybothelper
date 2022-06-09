module.exports= {
    name: 'say',
    description: 'Testando',
    execute(message,args){
       message.channel.send(args.join(' '))
    }
}