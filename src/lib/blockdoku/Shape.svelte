<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let draggedShape: Writable<boolean[][] | null> = writable();
	export let shape: boolean[][];
	let shapeDiv: HTMLDivElement;

	const handleDrag = (e: DragEvent) => {
		draggedShape.set(shape);
	};
	//TODO: handle combo mulitplyer
	const dispatch = createEventDispatcher();
</script>

<div
	role="figure"
	draggable="true"
	on:drag={(e) => handleDrag(e)}
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
						: ''} col-span-1 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
					on:mousedown={() => dispatch('xy', { x: x, y: y })}
				/>
			{/each}
		</div>
	{/each}
</div>

<style>
</style>
