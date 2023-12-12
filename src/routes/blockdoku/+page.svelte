<script lang="ts">
	import { writable } from 'svelte/store';

	const blocks = writable([
		[true, true, false, false, false, true, true, true, true],
		[false, true, true, false, false, true, true, true, true],
		[true, true, true, false, false, true, true, true, true],
		[true, true, true, false, false, true, true, true, true],
		[true, true, true, false, false, true, true, true, true],
		[true, true, true, false, false, true, true, true, true],
		[true, true, true, false, false, true, true, true, true],
		[true, true, true, false, false, true, true, true, true],
		[false, true, true, false, false, true, true, true, true]
	]);

	const shapes = [
		[
			[false, true, false],
			[true, true, true],
			[false, true, false]
		],
		[[true, true, true]],
		[[true], [true], [true]],
		[[true, true]],
		[[true], [true]],
		[[true]],
		[
			[true, true],
			[false, true]
		],
		[
			[true, true],
			[true, false]
		],
		[
			[false, true],
			[true, true]
		],
		[
			[true, false],
			[true, true]
		],
		[
			[true, true],
			[true, true]
		],
		[
			[false, true],
			[true, false]
		],
		[
			[true, false],
			[false, true]
		]
	];

	let random = Math.floor(Math.random() * 10);

	let value: number = 0;
	$: shape = shapes[value];
</script>

<h2 class="text-blockdoku">blockdoku</h2>
<section
	class="game-container bg-base-300 w-fit m-auto grid grid-cols-9 mobile:p-2 desktop:p-4 lgdesktop:p-6 mobile:mt-5 desktop:mt-8 lgdesktop:mt-10"
>
	{#each $blocks as row}
		{#each row as block}
			<span
				class="{block
					? 'bg-primary'
					: 'bg-base-200'} mobile:w-8 mobile:h-8 desktop:w-10 desktop:h-10 lgdesktop:w-16 lgdesktop:h-16 border-solid border-2 border-base-300"
			/>
		{/each}
	{/each}
</section>
<section>blocks</section>
{shape}

<button class="btn" {value} on:click={() => (value = value + 1)}>+</button>
<button class="btn" {value} on:click={() => (value = value - 1)}>-</button>

<div class="grid grid-cols-{shape.length} w-fit">
	{#each shape as row}
		{#each row as shape}
			<span
				class="{shape
					? 'bg-primary border-solid border-2 border-base-300'
					: ''} mobile:w-6 mobile:h-6 desktop:w-8 desktop:h-8 lgdesktop:w-12 lgdesktop:h-12"
			/>
		{/each}
	{/each}
</div>

<style>
</style>
