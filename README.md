# telegram bot kit

<br/>

### Setting Up Your Telegram Bot

<br/>

1. **Create a Telegram Bot:**
   - Go to [BotFather](https://t.me/BotFather).
   - Follow the instructions to create a new bot.
   - Note down your Bot Token provided by BotFather.
   
   <br/>

2. **Obtain Your Chat ID:**
   - Start a conversation with your bot.
   - Use your bot to send a message.
   - Retrieve your Chat ID by calling the Telegram API with your bot.
   
   <br/>

### Environment Variables

<br/>

1. **Configure `.env` File:**
   - Create a `.env` file in the root directory.
   - Add your Bot Token and Chat ID:
     ```
     VITE_BOT_TOKEN=your_bot_token_here
     VITE_CHAT_ID=your_chat_id_here
     ```
   - Replace `your_bot_token_here` and `your_chat_id_here` with actual values.
   
   <br/>

2. **Use `.env.example` as Reference:**
   - Copy `.env.example` to `.env` and fill in your credentials securely.

<br/>

### Running the Project
1. **Install Dependencies:**
   ```bash
   npm install && npm run dev