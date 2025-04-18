import { request, log } from 'directus:api';

var api = {
  id: "send-telegram-message",
  handler: async ({ bot_token, chat_id, message }) => {
    if (!bot_token || !chat_id || !message) {
      throw new Error("Bot token, chat ID, and message are required.");
    }

    try {
      const res = await request(
        `https://api.telegram.org/bot${bot_token}/sendMessage`,
        {
          method: "POST",
          body: {
            chat_id,
            text: message,
          },
        }
      );

      log(`Message sent to ${chat_id}: ${message}`);

      return {
        status: "success",
        response: res,
      };
    } catch (error) {
      log(`Error sending message: ${error.message}`);
      return {
        status: "error",
        error: error.message,
      };
    }
  },
};

export { api as default };
