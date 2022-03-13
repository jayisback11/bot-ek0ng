function pickUser(message) {
  const userVoiceChannel = message.member.voice.channel?.id;
  if (userVoiceChannel === undefined) {
    message.reply("Please join a voice channel.");
  } else {
    let usersInVoice = [];
    let indexOfUser;
    const channel = message.channel;

    // GET ALL USERS' ID CURRENTLY IN THE VOICE CHANNELS
    message.member.voice.channel.members.each((member) => {
      usersInVoice.push(member.id);
    });

    // PICK AN INDEX FROM THE ARRAY 'usersInVoice'
    indexOfUser = Math.floor(Math.random() * usersInVoice.length);

    // TAG USER
    channel.send(
      "https://tenor.com/view/pokemon-i-choose-you-ash-anime-choose-you-gif-8090350"
    );
    channel.send("<@" + usersInVoice[indexOfUser] + ">");
  }
}

export { pickUser };
