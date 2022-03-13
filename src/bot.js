import dotenv from "dotenv";
import { Client, Intents, ClientPresence, VoiceChannel } from "discord.js";
import { rollNumber } from "./roll.js";
import { pickUser } from "./pick.js";
dotenv.config();

// client is a instance of Client class
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, "GUILD_MESSAGES", "GUILD_VOICE_STATES"]
});

const clientPresence = new ClientPresence({});

const PREFIX = "$";

// When the client is ready, run this code (only once)
client.on("ready", () => {
  console.log(`${client.user.username} has logged in!`);
  client.user.setUsername("BOT ek0ng");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const indexOfPhrase = Math.floor(Math.random() * 2);
  const fivePercentChange = Math.floor(Math.random() * 20);
  // COMMANDS
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);

    if (CMD_NAME === "roll") {
      rollNumber(message, args);
    } else if (CMD_NAME === "pick") {
      pickUser(message);
    }
  }

  // MESSAGES
  else if (
    message.author.username === "INCOGNITOJJ" &&
    fivePercentChange === 1
  ) {
    if (indexOfPhrase === 0) {
      message.reply("sml");
    } else {
      message.reply("wehh");
    }
  } else if (message.author.username === "Darren" && fivePercentChange === 1) {
    if (indexOfPhrase === 0) {
      message.reply("chill lang");
    } else {
      message.reply("nakoww");
    }
  } else if (message.author.username === "ek0ng" && fivePercentChange === 1) {
    if (indexOfPhrase === 0) {
      message.reply("wassup boss");
    }
  } else if (message.author.username === "JF" && fivePercentChange === 1) {
    if (indexOfPhrase === 0) {
      message.reply("sire, your food 🍔 is ready ");
    } else {
      message.reply("my majesty 👑");
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
