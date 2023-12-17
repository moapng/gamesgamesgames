<script lang="ts">
	import { onMount } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	export let draggedShape: Writable<boolean[][] | null> = writable();
	export let shape: Writable<boolean[][]>;

	const length: Writable<number> = writable();

	const handleDrag = (e: Event) => {
		draggedShape.set($shape);
	};

	const handleDragEnd = () => {};
	let shapeDiv: HTMLDivElement;

	onMount(() => {
		length.set($shape[0].length);
		shapeDiv.style.gridTemplateColumns = `repeat(${$length}, minmax(0, 1fr))`;
	});
</script>

<div
	class="grid grid-cols-{$length}"
	role="figure"
	draggable="true"
	on:drag={(e) => handleDrag(e)}
	bind:this={shapeDiv}
>
	{#each $shape as row}
		{#each row as cell}
			<span
				class="{cell
					? 'bg-primary border-solid border-2 border-base-300'
					: ''} col-span-1 mobile:w-6 mobile:h-6 pad:w-8 pad:h-8 desktop:w-8 desktop:h-8 lgdesktop:w-12 lgdesktop:h-12"
			/>
		{/each}
	{/each}
</div>

<style>
</style>
