function rollNumber(message, args) {
  if (args.length === 0 || args.length === 1 || args.length > 2) {
    return message.reply('Please provide a range. e.g "$roll 1 3"');
  } else {
    const min = Math.ceil(args[0]);
    const max = Math.floor(args[1]);
    message.reply(
      `🎲 Rolled: ${Math.floor(Math.random() * (max - min) + min)}`
    );
  }
}

export { rollNumber };
