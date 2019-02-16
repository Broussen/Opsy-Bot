const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on ('ready', function () {
    bot.user.setGame('Le bot est en Maintenance...')
})

bot.on('message', function (message) {
    if (message.content === '/ping') {
        message.reply('pong !')
    }
})

bot.on('message', function (message) {
    if (message.content === '/help') {
        message.reply('\n Commands du bot : \n  Le préfix du bot : ``/`` \n  Faite ``/help`` pour savoir toute les commands ! \n \n Voici les nouvelle commands : ``ipo`` \n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n Commands discord : \n ``ping, afk (AFK Indisponible)`` \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬** \n Commands de Opsylon : \n ``serveur , ipo``')
    }
})

bot.on('message', function (message) {
    if (message.content === '/serveur') {
        message.reply('Le serveur est en Maintenance')
    }
})

bot.on('message', function (message) {
    if (message.content === '/ipo') {
        message.reply('L ip du serveur est indisponible !')
    }
})

bot.on('message', function (message) {
    if (message.content === '/prefix') {
        message.reply('Changement de préfix indisponible pour le moment !')
    }
})

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
      return channel.send('Bienvenue sur mon serveur ' + member.displayName)
    }).catch(console.error)
  })

bot.login('NTQ1NzAyMzMxMzQyMzg5MjU4.D0iKog.MeyInZGGcn4zpdoupM6lAF19718')
