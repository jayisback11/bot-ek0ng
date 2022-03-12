require("dotenv").config();

// interacts with discord API
const { Client, Intents } = require("discord.js");

// client is a instance of Client class
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES"]
});

const PREFIX = "$";

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log(`${client.user.username} has logged in!`);
  client.user.setUsername("BOT ek0ng");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  console.log(`${message.author.username}: ${message.content}`);
  if (Math.floor(Math.random() * 50) === 1) {
    message.reply("la ako paki");
  } else if (
    message.author.username === "ek0ng" &&
    Math.floor(Math.random() * 5) === 1
  ) {
    message.reply("sml");
  }

  // COMMANDS
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "roll") {
      if (args.length === 0 || args.length === 1)
        return message.reply('Please provide a range. e.g "$roll 1 3"');
      else {
        min = Math.ceil(args[0]);
        max = Math.floor(args[1]);
        message.reply(
          `Rolled: ${Math.floor(Math.random() * (max - min) + min)}`
        );
      }
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
