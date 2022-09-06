const { Function, isPublic, getUrl } = require("../lib/");
const { SS_API } = require("../config");
Function(
  {
    pattern: "ss ?(.*)",
    fromMe: isPublic,
    desc: "Take website screenshot",
    type: "download",
  },
  async (message, match) => {
    match = getUrl(match || message.reply_message.text);
    if (!match)
      return await message.send(
        "_Need a Url_\n*Example : ss https://h-e-r-m-i-t-web.herokuapp.com/deployment*"
      );
    await message.client.sendFromUrl(
      `https://shot.screenshotapi.net/screenshot?token=${SS_API}&url=${match}&output=image&file_type=png&wait_for_event=load`
    );
  }
);
Function(
  {
    pattern: "fullss ?(.*)",
    fromMe: isPublic,
    desc: "Take website Full screenshot",
    type: "download",
  },
  async (message, match) => {
    match = getUrl(match || message.reply_message.text);
    if (!match)
      return await message.send(
        "_Need a Url_\n*Example : fullss https://h-e-r-m-i-t-web.herokuapp.com/deployment*"
      );
    await message.sendFromUrl(
      message.jid,
      `https://shot.screenshotapi.net/screenshot?token=${SS_API}&url=${match}&full_page=true&output=image&file_type=png&wait_for_event=load`,
      message.reply_message.data || message.data
    );
  }
);
