require("dotenv").config();

// interacts with discord API
const { Client, Intents } = require("discord.js");

// client is a instance of Client class
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES"]
});

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log(`${client.user.username} has logged in!`);
  bot.user.setUsername("BOT ek0ng");
});

client.on("messageCreate", (message) => {
  if (Math.floor(Math.random() * 50) === 1) {
    message.reply("la ako paki");
  } else if (
    message.author.username === "ek0ng" &&
    Math.floor(Math.random() * 5) === 1
  ) {
    message.reply("sml");
  }
});

client.login(process.env.DISCORD_TOKEN);
