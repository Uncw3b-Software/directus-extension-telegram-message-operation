import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "send-telegram-message",
  name: "Send Telegram Message",
  icon: "send",
  description: "Send a message to a Telegram chat using bot token and chat ID.",
  overview: ({ bot_token, chat_id, message }) => [
    { label: "Bot Token", text: bot_token },
    { label: "Chat ID", text: chat_id },
    { label: "Message", text: message },
  ],
  options: [
    {
      field: "bot_token",
      name: "Bot Token",
      type: "string",
      meta: {
        width: "full",
        required: true,
        interface: "input",
        placeholder: "123456789:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
      },
    },
    {
      field: "chat_id",
      name: "Chat ID or User ID",
      type: "string",
      meta: {
        width: "full",
        required: true,
        interface: "input",
        placeholder: "123456789",
      },
    },
    {
      field: "message",
      name: "Message",
      type: "text",
      meta: {
        width: "full",
        required: true,
        interface: "input-rich-text-md",
        placeholder: "Hello from Directus Flow!",
      },
    },
  ],
});
