import dotenv from 'dotenv'
import { Client, Intents, ClientPresence, VoiceChannel } from 'discord.js'
import { rollNumber } from './commands/roll.js'
import { pickUser } from './commands/pick.js'
import { coinflip } from './commands/coinflip.js'
import { responseToJabami } from './responseToUsers/responseToJabami.js'
dotenv.config()

// client is a instance of Client class
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, 'GUILD_MESSAGES', 'GUILD_VOICE_STATES']
})

const clientPresence = new ClientPresence({})

const PREFIX = '$'

// When the client is ready, run this code (only once)
client.on('ready', () => {
  console.log(`${client.user.username} has logged in!`)
  client.user.setUsername('BOT ek0ng')
})

client.on('messageCreate', message => {
  // If the author is a bot then do nothing
  if (message.author.bot) return

  // Commands
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/)

    if (CMD_NAME === 'roll') {
      rollNumber(message, args)
    } else if (CMD_NAME === 'pick') {
      pickUser(message)
    } else if (CMD_NAME === 'flip') {
      coinflip(message)
    }
  }

  if (message.author.username.includes('Vann')) {
    responseToJabami(message)
  }
})

client.login(process.env.DISCORD_TOKEN)
