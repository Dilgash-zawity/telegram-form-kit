<!-- # Project Setup Guide
<br/>

## Clone the Git Repository

```bash
git clone https://github.com/Dilgash-zawity/telegram-form-kit.git
cd telegram-form-git
```
<br/>

## Set Up Environment Variables
Rename .env.example to .env:


```env
VITE_BOT_TOKEN=your_bot_token_here
VITE_CHAT_ID=your_chat_id_here
``` -->



# telegram form kit

Follow these steps to set up and start the project:

1. **Clone the Git Repository:**
```bash
git clone https://github.com/Dilgash-zawity/telegram-form-kit.git
cd telegram-form-kit
```

2. **Rename `.env.example` to `.env`:**
- Locate the `.env.example` file in the project root.
- Rename it to `.env`.

<br/>

3. **Install Dependencies and Start the Project:**
```javascript
npm i
npm run dev
```

<br/>

4. **Configure Environment Variables:**
- Open the `.env` file and add your Telegram bot token and chat ID:
  ```plaintext
  VITE_BOT_TOKEN=your_bot_token_here
  VITE_CHAT_ID=your_chat_id_here
  ```

Make sure to replace `your_bot_token_here` and `your_chat_id_here` with your actual Telegram bot token and chat ID.

Once you've completed these steps, your project should be set up and ready to run locally.
