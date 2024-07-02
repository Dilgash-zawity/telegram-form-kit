# Telegram Form Kit

Follow these steps to set up and start the project:

<br/>

1. **Clone the Git Repository:**
   ```bash
   git clone https://github.com/Dilgash-zawity/telegram-form-kit.git
   cd telegram-form-kit
   ```
   <br/>

2. **Rename .env.example to .env:**

    Locate the .env.example file in the project root. Rename it to .env.

    <br/>

3. **Install Dependencies and Start the Project:**

    ```bash
    npm i
    npm run dev
    ```

    <br/>
  
4. **Get Your Telegram Bot Token and Chat ID:**

- Telegram Bot Token:

    1. Open Telegram and search for the BotFather user.
    2. Start a chat with BotFather.
    3. Use the /newbot command to create a new bot and follow the instructions.
    4. Once your bot is created, BotFather will provide you with a bot token. Copy this token.

    <br/>

- Telegram Chat ID:

    1. Start a chat with your newly created bot.
    2. Send a message to your bot.
    3. Open a web browser and go to the following URL, replacing <bot_token> with your bot's token:
    ```
    https://api.telegram.org/bot<bot_token>/getUpdates
    ```
    4. Look for the chat object within the JSON response. Find the id field, which represents your chat ID. Copy this chat ID.

    <br/>

5. Configure Environment Variables:

    - Open the .env file and add your Telegram bot token and chat ID:

    ```env
    VITE_BOT_TOKEN=your_bot_token_here
    VITE_CHAT_ID=your_chat_id_here
    ```

    Make sure to replace your_bot_token_here and your_chat_id_here with your actual Telegram bot token and chat ID.
