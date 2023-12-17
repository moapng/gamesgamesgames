<script lang="ts">
	import ShapesToPlace from '$lib/blockdoku/ShapesToPlace.svelte';
	import { writable, type Writable } from 'svelte/store';
	import { fade } from 'svelte/transition';

	const createEmptyGrid = (rows: number, columns: number) => {
		return Array.from({ length: rows }, () => Array(columns).fill(false));
	};

	const blocks: Writable<boolean[][]> = writable(createEmptyGrid(9, 9));

	const placeShape = (x: number, y: number, shape: boolean[][]) => {
		const shapeHeight = shape.length;
		const shapeWidth = shape[0].length;
		if (
			// check if x & y are between 0-8 (aka. fits in the 9x9 grid)
			x >= 0 &&
			x < $blocks[0].length &&
			y >= 0 &&
			y < $blocks.length &&
			x + shapeWidth <= $blocks[0].length && // check if shape fits horizontally / xAxis
			y + shapeHeight <= $blocks.length // check if shape fits vertically / yAxis
		) {
			// check if all cells needed for the shape are empty and fits in the 9x9 grid
			const canPlace = shape.every((row, j) =>
				row.every(
					(cell, i) =>
						!cell ||
						(x + i >= 0 &&
							x + i <= $blocks[0].length &&
							y + j >= 0 &&
							y + j <= $blocks.length &&
							!$blocks[y + j][x + i])
				)
			);

			if (canPlace) {
				blocks.update((arr) => {
					const newArray = arr.map((row) => [...row]);
					shape.forEach((row, j) => {
						row.forEach((cell, i) => {
							if (cell) {
								newArray[y + j][x + i] = true;
							}
						});
					});
					return newArray;
				});
			}
		}
	};

	const handleMouse = (x: number, y: number) => {
		if ($draggedShape) {
			placeShape(x, y, $draggedShape);
			// reset draggedShape after it's been placed
			draggedShape.set(null);
		}
	};

	const combo: Writable<number> = writable(0);
	const clearRow = () => {
		// check rows
		$blocks.forEach((row, i) => {
			if (row.every((block) => block === true)) {
				combo.set($combo + 1);
				row.forEach((_, j) => {
					blocks.update((arr) => {
						// update the whole row to be false
						const newArray = arr.map((r, rowIndex) => (rowIndex === i ? r.map(() => false) : r));
						return newArray;
					});
				});

				console.log(`CLEARED row ${i} `);
			}
		});

		// check columns
		for (let i = 0; i < $blocks.length; i++) {
			const column = $blocks.map((row) => row[i]);

			if (column.every((block) => block)) {
				combo.set($combo + 1);
				column.forEach((_, j) => {
					blocks.update((arr) => {
						// update the whole column to be false
						const newArray = arr.map((r, rowIndex) =>
							rowIndex === j
								? r.map((_, colIndex) => (colIndex === i ? false : arr[rowIndex][colIndex]))
								: r
						);
						return newArray;
					});
				});
				console.log(`CLEARED column ${i}`);
			}
		}
	};
	// TO DO: clear 3x3 like sudoku

	$: $blocks, clearRow();

	const draggedShape: Writable<boolean[][] | null> = writable();
</script>

<h2 class="text-blockdoku">blockdoku</h2>

<section
	class="mobile:max-desktop:absolute mobile:max-desktop:inset-x-0 mobile:max-desktop:bottom-0 desktop:flex"
>
	<div
		class="bg-base-300 w-fit m-auto grid grid-cols-9 mobile:p-2 mobile:mt-5 desktop:p-4 desktop:mt-8 lgdesktop:p-6 lgdesktop:mt-10"
	>
		{#each $blocks as row, y}
			{#each row as col, x}
				<span
					id={`${x},${y}`}
					class="{col
						? 'bg-primary'
						: 'bg-base-200'} mobile:w-8 mobile:h-8 pad:w-16 pad:h-16 desktop:w-14 desktop:h-14 lgdesktop:w-20 lgdesktop:h-20 border-solid border-2 border-base-300"
					role="figure"
					on:mouseenter={() => handleMouse(x, y)}
					transition:fade={{ delay: 250, duration: 300 }}
				/>
			{/each}
		{/each}
	</div>
	<ShapesToPlace {draggedShape} />
</section>

<style>
</style>
