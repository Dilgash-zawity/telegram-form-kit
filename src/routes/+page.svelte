<script lang="ts">

	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	let name = '';
	let email = '';
	let message = '';
	let isLoading = false; 

	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		isLoading = true; 

		try {
			const response = await fetch('/api/sendMessage', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ name, email, message })
			});

			if (response.ok) {
				toast.success('Message sent successfully!');
				
				name = '';
				email = '';
				message = '';
			} else {
				toast.error('Failed to send message.');
			}
		} catch (error) {
			toast.error('An error occurred while sending the message.');
		} finally {
			isLoading = false; 
		}
	};
</script>


<main class="flex flex-col items-center justify-center h-dvh w-dvw">
	<form class="card bg-base-300 flex flex-col gap-2 w-96 h-fit shadow-xl p-2" on:submit={handleSubmit}>

		<input type="text" id="name" placeholder="name" class="input input-bordered w-full " bind:value={name} required/>
		<input type="text" id="email" placeholder="email" class="input input-bordered w-full " bind:value={email} required/>
		<textarea class="textarea textarea-bordered w-full" placeholder="" bind:value={message}></textarea>
		<button class="btn btn-primary" type="submit" disabled={isLoading}>
			{#if isLoading}
		   <span>Loading...</span>
	   {:else}
		   <span>Submit</span>
	   {/if}
		</button>
		<Toaster />
	</form>
</main>


