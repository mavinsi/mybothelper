module.exports= {
    name: 'say',
    description: 'Testando',
    execute(message,args){
        console.log(args.join().replaceAll(",",""))
        message.channel.send(args.join().replaceAll(","," "))
    }
}