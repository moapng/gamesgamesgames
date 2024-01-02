<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let draggedShape: Writable<boolean[][] | null> = writable();
	export let shape: boolean[][];

	const handleDrag = () => {
		draggedShape.set(shape);
	};

	// TODO: handle combo mulitplyer

	let shapeDiv: HTMLDivElement;

	const dispatch = createEventDispatcher();
</script>

<div
	role="figure"
	draggable="true"
	on:drag={() => handleDrag()}
	on:dragend={() => dispatch('dragend')}
	bind:this={shapeDiv}
>
	{#each shape as row, y}
		<div class="flex">
			{#each row as cell, x}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span
					class="{cell
						? 'bg-primary border-solid border-2 border-base-300'
						: ''} w-5 h-5 2xl:w-10 2xl:h-10"
					on:mousedown={() => dispatch('xy', { x: x, y: y })}
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
</style>
