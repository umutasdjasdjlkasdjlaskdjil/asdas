
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
       .setTitle(`LeLySs - Moderasyon | Sayaç Yardım Menüsü`)
        .setDescription(`
<a:ay:815823365641338880> \`sayaç\` => Sayaç ayarlarsınız.
<a:ay:815823365641338880> \`sayaç sıfırla\` => Sayaç sıfırla. 
 
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayaç-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'sayaç-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};



