const Discord = require('discord.js');
const db = require('quick.db')
// Lütfen Çalmayınız Emek Verdim - GamerWolf
exports.run = async (client, message, args) => { 

let aboneyetkili = '808218004164182037'    // Buraya Abone Sorumlusu Rolü ID Sini Koyunuz

  if(!message.member.roles.cache.has(aboneyetkili)) 
  return message.channel.send('Abone yetkilileri değilsin.')
  let uye = message.mentions.members.first()
  let etiket = args[1]
  if (!uye) return message.channel.send('Lütfen birisini etiketle.')
  
      setTimeout(function(){
  uye.roles.add(abonerolü)
  },500)
  
  let abonerolü = '808216899673522206'  // Buraya Abone Rolü ID Sini Koyunuz
  
  let gamerwolf = new Discord.MessageEmbed() 
  .setDescription(`<@&808216899673522206> Rolü Başarıyla Hesabına Verildi!`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(gamerwolf)

};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['a','Abone'],
  permLevel: 0
}
exports.help = {
  name: 'abone',
  description: "GamerWolf Abone Rolü Verme Komutu", // Lütfen Çalmayınız Emek Verdim - GamerWolf
  usage: 'GamerWolf Abone Rolü Verme Komutu' // Lütfen Çalmayınız Emek Verdim - GamerWolf
}
