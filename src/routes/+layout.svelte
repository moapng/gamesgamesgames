<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';

	$: href = $page.url.pathname.slice(1);
</script>

<!-- <nav class="flex justify-end">
	<label class="cursor-pointer grid place-items-center w-24">
		<svg
			class="row-start-1 stroke-primary"
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg
		>
		<input
			type="checkbox"
			value="light"
			class="toggle theme-controller bg-base-content row-start-1 col-span-2"
		/>

		<svg
			class="row-start-1 stroke-secondary"
			xmlns="http://www.w3.org/2000/svg"
			width="14"
			height="14"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><circle cx="12" cy="12" r="5" /><path
				d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
			/></svg
		>
	</label>
</nav> -->
<div
	class="mobile:px-10 mobile:pt-6 desktop:px-24 desktop:pt-10 lgdesktop:px-32 lgdesktop:pt-16 min-h-screen h-full w-screen text-center"
	data-theme={href}
>
	<h1
		class="{href === 'blockdoku' ? 'text-blockdoku' : href === 'wordle' ? 'text-wordle' : ''} mb-10"
	>
		<a href="/">games galore</a>
	</h1>
	<slot />
</div>

<style>
	h1 {
		font-family: Norwester;
		font-size: 2rem;
		line-height: normal;

		text-align: center;
	}
</style>
