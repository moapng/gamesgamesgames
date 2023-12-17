<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Shape from './Shape.svelte';

	export let draggedShape: Writable<boolean[][] | null>;
	const shapes: boolean[][][] = [
		[[true]],
		[[true], [true]],
		[[true], [true], [true]],
		[[true], [true], [true], [true]],
		[[true, true]],
		[[true, true, true]],
		[[true, true, true, true]],
		[
			[true, true],
			[true, true]
		],
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
			[false, true],
			[true, false]
		],
		[
			[true, false],
			[false, true]
		],
		[
			[false, false, true],
			[false, true, false],
			[true, false, false]
		],
		[
			[true, false, false],
			[false, true, false],
			[false, false, true]
		],
		[
			[false, true, false],
			[true, true, true],
			[false, true, false]
		]
	];

	const returnRandom = () => {
		return Math.floor(Math.random() * 13);
	};
	const shapesToPlace = [
		writable(shapes[returnRandom()]),
		writable(shapes[returnRandom()]),
		writable(shapes[returnRandom()])
	];
	//TO DO: clear shape after it's been placed, when all are cleared, set 3 new ones
</script>

<div
	class="flex justify-evenly items-center bg-base-300 p-3 mt-8 desktop:absolute desktop: right-40 desktop:inset-y-0 desktop:gap-20 desktop:flex-col desktop:mt-auto"
>
	{#each { length: 3 } as _, i}
		<Shape shape={shapesToPlace[i]} {draggedShape} />
	{/each}
</div>
