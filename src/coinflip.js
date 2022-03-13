function coinflip(message) {
  if (Math.floor(Math.random() * 2) == 0) {
    message.reply(":coin:  Heads");
  } else {
    message.reply(":coin:  Tails");
  }
}

export { coinflip };
