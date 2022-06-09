## 📥 Instalando & configurando

1. Primeiramente clone o repositorio ``git clone https://github.com/mavinsi/mybothelper4noobs``
2. instale as depêndencias necessarias ``npm install``
3. Crie um arquivo com o nome de  ``.env`` e copie a base do arquivo ``.env.example``

EX:
```
BOT_NAME="COLOQUE AQUI O NOME DO SEU BOT"
BOT_TOKEN="COLOQUE AQUI O TOKEN DO SEU BOT"
```

4. Substitua os parêmetros dentro do arquivo env pelos solicitados no mesmo (mantenha entre aspas!)

EX:
```
BOT_NAME="John Doe"
BOT_TOKEN="1234dawdawd5678dawdawdaw912345dawdawd6789"
```
5. Agora inicie o script com ``npm start`` , se tudo estiver certo você recebera a mensagem que o seu nome está online
```bash
> npm start
> mybothelper@0.2.0 start
> node .

# Welcome to MyBotHelper 0.2.0
# github.com/mavinsi/mybothelper4noobs

[MBH] Initializing...
[MBH] Loading commands...
[ 'hello.js', 'initial.js', 'say.js' ]
[MBH] Commands loaded successfully
[MBH] Waking up Teste...
 ----------------
[MBH] starting initial.js...
[MBH] Teste online
```