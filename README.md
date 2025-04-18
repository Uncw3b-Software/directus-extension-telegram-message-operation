# 📩 Directus Telegram Message Sender (Flow Operation)

Send messages to any Telegram user or group using this custom operation inside your **Directus Flows**.

Developed by [UNCW3B Software](https://uncw3b.com) — your partner in custom dApps, AI SaaS, and web automation solutions.

---

## 🚀 Features

- 📡 Send messages to Telegram users or groups
- 🔧 Flow-friendly configuration (Bot Token, Chat ID, Message)
- 🧩 Fully compatible with Directus Flows
- 👨‍💻 No coding knowledge required

---

## 🧠 How It Works

1. This extension adds a new **Flow Operation** inside Directus called `Send Telegram Message`.
2. In your flow, you configure:
   - **Your Telegram Bot Token**
   - **Target Chat ID or Group ID**
   - **The Message Content**
3. When the flow is triggered, your message will be sent via Telegram Bot API.

---

## 🛠️ Installation

```bash
npx create-directus-extension
# Or clone this repo into /extensions/send-telegram-message
```

Make sure your `.env` includes:

```env
EXTENSIONS_PATH=./extensions
```

Then restart Directus:

```bash
npx directus start
```

---

## 🔐 Create Your Telegram Bot

1. Open Telegram and search for **@BotFather**
2. Type `/newbot` and follow the instructions
3. After naming your bot, you'll receive a **Bot Token** like:

```
123456789:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
```

<img width="521" alt="111" src="https://github.com/user-attachments/assets/5e0b728c-09f5-4c3e-97f7-e45edce4feef" />

---

## 👥 How to Find Chat ID or Group ID

### 🔸 Get Personal Chat ID

1. Start a conversation with your bot
2. Open this URL in browser:

```
https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
```

3. Look for `"chat":{"id":12345678...}`

<img width="862" alt="111" src="https://github.com/user-attachments/assets/3e698d77-1e84-4ce0-849c-cfef473c535a" />

### 🔸 Get Group Chat ID

1. Add your bot to a group
2. Send a message in the group
3. Then again visit:

```
https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
```

> Group IDs look like: `-100xxxxxxxxxx`

<img width="864" alt="111" src="https://github.com/user-attachments/assets/8663ad50-373e-456a-9673-149db9a53540" />

---

## ⚙️ Using the Operation in Directus

1. Go to **Flows > Create Flow**
2. Select a trigger (e.g. item created)
3. Add operation: **Send Telegram Message**
4. Fill in:
   - 🔐 Bot Token
   - 🆔 Chat ID
   - 💬 Message

<img width="619" alt="111" src="https://github.com/user-attachments/assets/b546091a-7c6c-447f-bd1b-e73f091344cf" />

---

## 📤 Output

**Success:**

```json
{
  "status": "success",
  "sent_to": "123456789",
  "message": "Hello from Directus!"
}
```

**Error:**

```json
{
  "status": "error",
  "error": "Unauthorized"
}
```

---

## 🧩 Extension Details

- ID: `send-telegram-message`
- Type: `operation`
- Host: `api`
- Dependencies: `axios`

📁 File structure:

```
extensions/
    └── send-telegram-message/
        ├── api.js
        ├── app.js
        └── package.json
```

---

## 🤝 Need Help?

Contact **@cryptoraichu** on:

- [Twitter](https://twitter.com/cryptoraichu)
- [Telegram](https://t.me/cryptoraichu)
- Discord: `cryptoraichu`

---

Built with ❤️ by [UNCW3B Software](https://uncw3b.com)
