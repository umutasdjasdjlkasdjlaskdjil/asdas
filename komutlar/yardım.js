
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
let botid = ('780693349584994335') 
 
exports.run = async(client, message, args) => { 
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "/";

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`LeLySs - Moderasyon | Yardım Menüsü`)
        .setDescription(`
<a:ay:815823365641338880> \`moderasyon\` => Moderasyon menüsünü açar.     
        
<a:ay:815823365641338880> \`sayaç-yardım\` => Sayaç yardım menüsünü açar.
<a:ay:815823365641338880> \`otorol-yardım\` => Otorol yardım menüsünü açar.

`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};