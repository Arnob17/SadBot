let hello = async (sad, message, args) => {
    message.reply('hello');
}

module.exports.run = hello;

module.exports.data = {
    name: 'hello',
    aliases: []
}