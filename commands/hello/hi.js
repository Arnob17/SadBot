const discord = require('discord.js');

let x = async (sad, message, args) => {

    return message.reply('hello');

}

module.exports.run = x;
module.exports.data = {
    name: 'hi',
    aliases: []
}