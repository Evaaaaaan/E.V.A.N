require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({
intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  ],

})

process.on('unhandledRejection', error => {
	console.error('Unhandled promise rejection:', error);
});

client.on("shardError", error => {
    console.error('A websocket connection encountered an error:', error);
});

client.on('ready', () => {
    console.log('the bot is online')
})

client.on('messageCreate', message => {
    if (message.content === 'man' ) {
      message.reply('man, i could really go for an extra hot, no whip, white chocolate macchiato')
    }
})

client.login(process.env.TOKEN)

//Hallo
