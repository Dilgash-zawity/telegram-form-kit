<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
    

	import { goto } from '$app/navigation';
	import { sendTelegramMessage } from '$lib/telegram';

    let name = '';
  let email = '';
  let message = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      await sendTelegramMessage(name, email, message);
      alert('Message sent successfully!');
      
      name = '';
      email = '';
      message = '';

      goto('/');
    } catch (error) {
      alert('Failed to send message. Please try again later.');
      console.error(error);
    }
  }</script>

<form class="fixed flex h-[100dvh] w-full items-center justify-center"  on:submit={handleSubmit}>
	<Card.Root class="w-96">
		<Card.Header>
			<Card.Title>telegram bot kit form</Card.Title>
			<Card.Description></Card.Description>
		</Card.Header>
		<Card.Content class="flex flex-col gap-5">
			<div class="flex w-full max-w-sm flex-col gap-1.5">
				<Label for="Name">Name</Label>
				<Input type="text" id="name" bind:value={name} placeholder="Name" required/>
				<p class="text-sm text-muted-foreground">Enter your full name.</p>
			</div>

			<div class="flex w-full max-w-sm flex-col gap-1.5">
				<Label for="email-2">Email</Label>
				<Input type="email" id="email" bind:value={email} placeholder="Email" required/>
				<p class="text-sm text-muted-foreground">Enter your email address.</p>
			</div>

			<div class="grid w-full gap-1.5">
				<Label for="message-2">Your Message</Label>
				<Textarea placeholder="Type your message here." id="message" bind:value={message} required/>
			</div>
		</Card.Content>
		<Card.Footer>
			<Button type="submit">submit</Button>
		</Card.Footer>
	</Card.Root>
</form>


   