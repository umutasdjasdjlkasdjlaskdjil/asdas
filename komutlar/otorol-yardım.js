
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
       .setTitle(`LeLySs - Moderasyon | Otorol Yardım Menüsü`)
        .setDescription(`
<a:ay:815823365641338880> \`otorol-ayarla\` => Otorol ayarlarsınız. 
<a:ay:815823365641338880> \`otorol-sıfırla\` => Otorol sıfırlarsını.
<a:ay:815823365641338880> \`otorol-mesaj\` => Otorol mesaj ayarlarsınız.
<a:ay:815823365641338880> \`otorol-mesaj-sıfırla\` => Otorol mesaj sıfırlar.
`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return  message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otorol-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'otorol-yardım',
  description: 'a!davet-sistemi Menüsü',
  usage: 'yardım'
};



