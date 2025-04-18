import axios from "axios";

export default {
  id: "send-telegram-message",
  handler: async ({ bot_token, chat_id, message }) => {
    if (!bot_token || !chat_id || !message) {
      throw new Error("Bot token, chat ID and message are required.");
    }

    const url = `https://api.telegram.org/bot${bot_token}/sendMessage`;

    try {
      await axios.post(url, {
        chat_id,
        text: message,
      });

      return {
        status: "success",
        sent_to: chat_id,
        message,
      };
    } catch (error) {
      return {
        status: "error",
        error: error.response?.data?.description || error.message,
      };
    }
  },
};
