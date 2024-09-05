import type { RequestHandler } from '@sveltejs/kit';
import { BOT_TOKEN, CHAT_ID } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
  const { name, email, message } = await request.json();

  // Compose the message to send to Telegram
  const text = `New Contact Form Submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

  // Send message to Telegram
  const telegramApiUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text
      })
    });

    if (!response.ok) {
      return new Response('Failed to send message to Telegram', { status: 500 });
    }

    return new Response('Message sent successfully', { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Error sending message to Telegram', { status: 500 });
  }
};
