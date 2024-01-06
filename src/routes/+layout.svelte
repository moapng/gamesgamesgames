<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import '../app.css';

	$: href = $page.url.pathname.replace(/\/|gamesgamesgames/g, ''); //regex for removing / + gamesx3
</script>

<div class="sm:px-10 2xl:px-20 h-screen w-screen text-center" data-theme={href}>
	<h1
		class="{href === 'blockdoku' ? 'text-blockdoku' : href === 'wordle' ? 'text-wordle' : ''} mb-1"
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
