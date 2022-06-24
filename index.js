const  { Client, Intents } = require("discord.js");
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Sad =  require("./classes/Main.js");
require('dotenv').config()
const sad = new Sad(process.env.token, bot);

sad.start()