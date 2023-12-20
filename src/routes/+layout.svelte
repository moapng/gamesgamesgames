<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../app.css';

	$: href = $page.url.pathname.replace(/\//g, '');; //regex for removing /
$:console.log(href)
</script>

<div
	class="mobile:px-10 mobile:pt-6 desktop:px-20 desktop:pt-10 lgdesktop:px-32 lgdesktop:pt-16 min-h-screen h-full w-screen text-center"
	data-theme={href}
>
	<h1
		class="{href === 'blockdoku' ? 'text-blockdoku' : href === 'wordle' ? 'text-wordle' : ''} mb-10"
	>
		<a href="{base}/">games galore</a>
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
