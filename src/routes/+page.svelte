<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	let name = '';
	let email = '';
	let message = '';
	let isLoading = false; // Track loading state

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		isLoading = true; // Set loading state to true when form is submitted

		try {
			const response = await fetch('/api/sendMessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message }),
			});

			if (response.ok) {
				toast.success('Message sent successfully!');
				// Optionally reset the form
				name = '';
				email = '';
				message = '';
			} else {
				toast.error('Failed to send message.');
			}
		} catch (error) {
			toast.error('An error occurred while sending the message.');
		} finally {
			isLoading = false; // Set loading state to false after the request is finished
		}
	};
</script>

<!-- Frontend form -->
<form class="fixed flex h-[100dvh] w-full items-center justify-center" on:submit={handleSubmit}>
	<Card.Root class="w-96">
		<Card.Header>
			<Card.Title>Telegram Bot Kit Form</Card.Title>
		</Card.Header>
		<Card.Content class="flex flex-col gap-5">
			<div class="flex w-full max-w-sm flex-col gap-1.5">
				<Label for="name">Name</Label>
				<Input type="text" id="name" bind:value={name} placeholder="Name" required />
				<p class="text-sm text-muted-foreground">Enter your full name.</p>
			</div>

			<div class="flex w-full max-w-sm flex-col gap-1.5">
				<Label for="email">Email</Label>
				<Input type="email" id="email" bind:value={email} placeholder="Email" required />
				<p class="text-sm text-muted-foreground">Enter your email address.</p>
			</div>

			<div class="grid w-full gap-1.5">
				<Label for="message">Your Message</Label>
				<Textarea id="message" bind:value={message} placeholder="Type your message here." required />
			</div>
		</Card.Content>
		<Card.Footer>
			<!-- Button disabled and shows "Loading..." when isLoading is true -->
			<Button type="submit" disabled={isLoading}>
				{#if isLoading}
					<!-- You can replace this text with a spinner icon if needed -->
					<span>Loading...</span>
				{:else}
					<span>Submit</span>
				{/if}
			</Button>
		</Card.Footer>
	</Card.Root>

	<!-- Toast notification -->
	<Toaster />
</form>
