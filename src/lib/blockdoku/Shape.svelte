<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let draggedShape: Writable<boolean[][] | null> = writable();
	export let shape: boolean[][];
	export let points: Writable<number>;

	const handleDrag = () => {
		draggedShape.set(shape);
	};
	// TO DO: do not allow drag to end if shape cannot be placed
	//TO DO: handle combo mulitplyer
	const handleDragEnd = () => {
		let shapePoints = shape.flat().filter((value) => value === true).length;
		points.set($points + shapePoints);
		dispatch('dragend');
	};
	let shapeDiv: HTMLDivElement;

	const dispatch = createEventDispatcher();
</script>

<div
	role="figure"
	draggable="true"
	on:drag={() => handleDrag()}
	on:dragend={() => handleDragEnd()}
	bind:this={shapeDiv}
>
	{#each shape as row, y}
		<div class="flex">
			{#each row as cell, x}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span
					class="{cell
						? 'bg-primary border-solid border-2 border-base-300'
						: ''} col-span-1 w-5 h-5 2xl:w-10 2xl:h-10"
					on:mousedown={() => dispatch('xy', { x: x, y: y })}
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
</style>
