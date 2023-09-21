<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { spring } from 'svelte/motion';

	let todos = [
		{count: 0, text: 'hello'}
	]

	const handleAdd = () => {
		todos = todos.concat({
			count: 0, text: ''
		})
	}

	$: sum = todos.reduce((value, currentTodo) => value + currentTodo.count, 0);
	$: title = todos.map(todo=> todo.text);

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
		Multiple Counter
	</h1>
	{#each todos as todo}
	<div class="contaniner">
		<input bind:value={todo.text} placeholder="new" />
		<div class="counter">
			<button on:click={() => (todo.count -= 1)} aria-label="Decrease the counter by one">
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0.5 L1,0.5" />
				</svg>
			</button>
		
			<div class="counter-viewport">
				<div class="counter-digits">
					<strong >{Math.floor(todo.count)}</strong>
				</div>
			</div>
		
			<button on:click={() => (todo.count += 1)} aria-label="Increase the counter by one">
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
				</svg>
			</button>
		</div>
	</div>
	{/each}
	<button on:click={handleAdd}>New Counter</button>
	<h2>
		<strong>Title List:</strong>{title}<br/>
		<strong>Sum of count:</strong>{sum}
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.contaniner {
		display: flex;
		align-items: center;
	}
	.counter {
		display: flex;
		border-top: 1px solid rgba(0, 0, 0, 0.1);
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 0;
		background-color: transparent;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	.contaniner input {
		border-radius: 12px;
		margin-right: 20px;
		height: 50px;
	}

	svg {
		width: 25%;
		height: 25%;
	}

	path {
		vector-effect: non-scaling-stroke;
		stroke-width: 2px;
		stroke: #444;
	}

	.counter-viewport {
		width: 8em;
		height: 4em;
		overflow: hidden;
		text-align: center;
		position: relative;
	}

	.counter-viewport strong {
		position: absolute;
		display: flex;
		width: 100%;
		height: 100%;
		font-weight: 400;
		color: var(--color-theme-1);
		font-size: 4rem;
		align-items: center;
		justify-content: center;
	}

	.counter-digits {
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>
