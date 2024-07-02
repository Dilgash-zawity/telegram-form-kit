const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN as string;
const CHAT_ID = import.meta.env.VITE_CHAT_ID as string;

export async function sendTelegramMessage(name: string, email: string, message: string): Promise<void> {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const text = `Name: ${name} \n\nEmail: ${email}\n\nMessage:\n${message}`;
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      throw new Error('Failed to send message');
    }
  }
