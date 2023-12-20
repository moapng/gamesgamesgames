<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import Shape from './Shape.svelte';

	export let draggedShape: Writable<boolean[][] | null>;
	export let points: Writable<number>;

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
	const shapesToPlace: Writable<{ [key: string]: boolean[][] }> = writable({
		shape1: shapes[returnRandom()],
		shape2: shapes[returnRandom()],
		shape3: shapes[returnRandom()]
	});

	const populateShapesToPlace = () => {
		const keys = Object.keys($shapesToPlace);
		if (keys.length === 0) {
			shapesToPlace.set({
				shape1: shapes[returnRandom()],
				shape2: shapes[returnRandom()],
				shape3: shapes[returnRandom()]
			});
		}
	};

	$: $shapesToPlace, populateShapesToPlace();
</script>

<div
	class="fixed bottom-0 left-0 py-4 h-28 w-full flex flex-wrap justify-evenly items-center bg-base-200"
>
	{#each Object.entries($shapesToPlace) as [key, shape]}
		<Shape
			{shape}
			{draggedShape}
			{points}
			on:xy
			on:dragend={() => {
				shapesToPlace.update((obj) => {
					const { [key]: removedShape, ...restOfArr } = obj;
					return restOfArr;
				});
			}}
		/>
	{/each}
</div>
