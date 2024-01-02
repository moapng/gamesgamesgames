<script lang="ts">
	import Shape from '$lib/blockdoku/Shape.svelte';
	import { returnRandom, shapes, shapesToPlace } from '$lib/blockdoku/shapeStuff';
	import { writable, type Writable } from 'svelte/store';

	const createEmptyGrid = (rows: number, columns: number) => {
		return Array.from({ length: rows }, () => Array(columns).fill(false));
	};

	const blocks: Writable<boolean[][]> = writable(createEmptyGrid(9, 9));
	let startX: number, startY: number;
	let shapeKey: string;

	const placeShape = (x: number, y: number, shape: boolean[][]) => {
		x = x - startX;
		y = y - startY; // make it so the shape is placed by the part you're dragging it by

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
				shapesToPlace?.update((obj) => {
					const { [shapeKey]: removedShape, ...restOfArr } = obj;
					return restOfArr;
				});
				let shapePoints = shape.flat().filter((value) => value === true).length;
				points.set($points + shapePoints);
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
		// clear rows
		$blocks.forEach((row, i) => {
			if (row.every((block) => block)) {
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

		// clear columns
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
		// checka x:0-2 och y:0-2, osv
		// clear 3x3
		let blockRowCol: number = 3;
		// for (blockRowCol; blockRowCol < 3; blockRowCol + 3) {
		const threeByThree: boolean[][] = [];
		for (let i = 0; i < blockRowCol; i++) {
			let row = [];
			for (let j = 0; j < 3; j++) {
				row.push($blocks[i][j]);
			}
			threeByThree.push(row);
		}

		const allValuesTrue =
			threeByThree.length === 3 &&
			threeByThree.every((row) => row.length === 3 && row.every((value) => value === true));

		if (allValuesTrue) {
			console.log('All values in threeByThree are true');
			console.log(threeByThree);
			blocks.update((arr) => {
				console.log(arr);
				for (let i = blockRowCol - 3; i < blockRowCol; i++) {
					for (let j = blockRowCol - 3; j < blockRowCol; j++) {
						arr[i][j] = false;
					}
				}
				console.log(arr);
				return arr;
			});
		}
		// }
	};
	// TODO: clear 3x3 like sudoku

	$: $blocks, clearRow();

	const draggedShape: Writable<boolean[][] | null> = writable();
	const points: Writable<number> = writable(0);

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

<h2 class="text-primary">blockdoku</h2>
<!-- to do, make own component -->
<div class="stats bg-base-200">
	<div class="stat place-items-center">
		<div class="stat-title">Points</div>
		<div class="stat-value text-primary">{$points}</div>
		<div class="stat-desc">last best stat: XXX</div>
	</div>
</div>

<section class="inset-x-0">
	<div class="bg-base-300 w-fit m-auto grid grid-cols-9 p-2">
		{#each $blocks as row, y}
			{#each row as col, x}
				<span
					id={`${x},${y}`}
					class="{col
						? 'bg-primary'
						: 'bg-base-200'} w-8 h-8 sm:w-12 sm:h-12 2xl:w-16 2xl:h-16 border-solid border-2 border-base-300"
					role="figure"
					on:mouseenter={() => handleMouse(x, y)}
				/>
			{/each}
		{/each}
	</div>
</section>

<div
	class="fixed bottom-0 left-0 py-4 h-28 w-full flex flex-wrap justify-evenly items-center bg-base-200"
>
	{#each Object.entries($shapesToPlace) as [key, shape]}
		<Shape
			{shape}
			{draggedShape}
			on:xy={(e) => {
				startX = e.detail.x;
				startY = e.detail.y;
			}}
			on:dragend={() => {
				shapeKey = key;
			}}
		/>
	{/each}
</div>

<style>
</style>
