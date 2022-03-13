import dotenv from "dotenv";
import { Client, Intents } from "discord.js";
import { rollNumber } from "./roll.js";
dotenv.config();

// client is a instance of Client class
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES"],
});

const PREFIX = "$";

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log(`${client.user.username} has logged in!`);
  client.user.setUsername("BOT ek0ng");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const indexOfPhrase = Math.floor(Math.random() * 2);

  // COMMANDS
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "roll") {
      rollNumber(message, args);
      return;
    } else if (CMD_NAME === "pick") {
    }
  }

  // MESSAGES
  else if (
    message.author.username === "INCOGNITOJJ" &&
    Math.floor(Math.random() * 10) === 1
  ) {
    if (indexOfPhrase === 0) {
      message.reply("sml");
    } else {
      message.reply("wehh");
    }
  } else if (
    message.author.username === "Darren" &&
    Math.floor(Math.random() * 10) === 1
  ) {
    if (indexOfPhrase === 0) {
      message.reply("chill lang");
    } else {
      message.reply("nakoww... gumagalaw nanaman");
    }
  } else if (
    message.author.username === "ek0ng" &&
    Math.floor(Math.random() * 2) === 1
  ) {
    if (indexOfPhrase === 0) {
      message.reply("wassup boss");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
