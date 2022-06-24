const discord = require('discord.js');
const fs = require('fs')

function handler(sad) {

    sad.commands = new discord.Collection();

    sad.aliases = new discord.Collection();

    fs.readdirSync('./commands/').forEach(x => {
        fs.readdir(`./commands/${x}`, (err, files) => {
            if (err) {
                console.log(err)
            }
            let file = files.filter(f => f.split(".").pop() === "js" || "ts");
            file.forEach((f, i) => {
                let props = require(`./commands/${x}/${f}`)
                console.log(props);
                sad.commands.set(props.data.name, props);
                props.data.aliases.forEach((x) => {
                    sad.commands.set(x, props.data.name)
                })
            })
        })
    })

    sad.on('ready', () => {
        sad.on('messageCreate', async message => {
            let prefix = '-'
            if (message.author.bot) return;
            let args = message.content.slice(prefix.length).trim().split(/ +/g);
            let cmd = args.shift().toLowerCase();
            let commandfile;
    
            if (sad.commands.has(cmd)) {
                commandfile = sad.commands.get(cmd);
            } else if (sad.aliases.has(cmd)) {
                commandfile = sad.commands.get(sad.aliases.get(cmd));
            }
            if (!message.content.startsWith(prefix)) return;
            if (!commandfile) {
                return;
            }
            try {
                commandfile.run(sad, message, args);
            } catch (e) {
                console.log(e);
            }
        })  
    })
}

module.exports = handler;