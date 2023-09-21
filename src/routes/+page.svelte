<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	let todos = [
		{count: 0, text: 'new', status: true}
	]

	const handleAdd = () => {
		todos = todos.concat({
			count: 0, text: '', status: true
		})
	}

	const handleClear = ()=>{
		console.log('clear')
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
	<div class="contaniner" class:done={todo.status}>
		<input bind:value={todo.text} placeholder="new" />
		<div class="counter">
			<div class="counter-viewport">
				<div class="counter-digits">
					<strong >{Math.floor(todo.count)}</strong>
				</div>
			</div>
			<button-group class="button-group">
				<button on:click={() => (todo.count -= 1)} aria-label="Decrease the counter by one" class="left-button">
					<svg aria-hidden="true" viewBox="0 0 1 1">
						<path d="M0,0.5 L1,0.5" />
					</svg>
				</button>
				<button on:click={() => (todo.count += 1)} aria-label="Increase the counter by one" class="center-button">
					<svg aria-hidden="true" viewBox="0 0 1 1">
						<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
					</svg>
				</button>
				<button on:click={() => (todo.count = 0)} aria-label="Increase the counter by one" class="right-button">0</button>
			</button-group>
			<button class="close-button" on:click={handleClear}>
				<svg aria-hidden="true" viewBox="0 0 1 1">
					<path d="M0,0 L1,1 M0,1 L1,0" />
				</svg>
			</button>
		</div>
	</div>
	{/each}
	<button class="add-button" on:click={handleAdd}>New Counter</button>
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
		padding: 10px;
		margin-bottom: 20px;
		background-color: rgb(200, 242, 253);
		box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);;
	}
	.counter {
		display: flex;
		margin: 1rem 0;
	}

	.counter button {
		width: 2em;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		touch-action: manipulation;
		font-size: 2rem;
	}

	.right-button {
		border-start-end-radius: 12px;
		border-end-end-radius: 12px;
		border-left: 0;
		background-color: rgb(213, 247, 65);
	}

	.left-button {
		border-end-start-radius: 12px;
		border-start-start-radius: 12px;
		border-right: 0;
		background-color: rgb(253, 134, 164);
	}

	.center-button {
		background-color: rgb(146, 134, 253);
		border-right: 0;
		border-left: 0;
	}

	.close-button {
		margin-left: 20px;
		border-radius: 12px;
	}

	.add-button {
		width: 420px;
		background-color: green;
		border: 0;
		border-radius: 5px;
		text-emphasis-color: white;
	}

	.counter button:hover {
		background-color: var(--color-bg-1);
	}

	.contaniner input {
		border-radius: 12px;
		margin-right: 20px;
		height: 50px;
	}

	.button-group {
		display: flex;
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
