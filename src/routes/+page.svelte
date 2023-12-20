<script lang="ts">
	import { base } from '$app/paths';
</script>

<section>
	<h2 class="mb-10">choose a game</h2>
	<ul>
		<li><a href="{base}/blockdoku" class="btn btn-outline text-blockdoku my-4">blockdoku</a></li>
		<!-- <li><a href="{base}/wordle" class="btn btn-outline text-wordle my-4 pt-3 rounded-lg ">wordle</a></li> -->
		<li>
			<a class="btn btn-outline my-4">more to be added</a>
		</li>
	</ul>
</section>

<style>
	a {
		text-align: center;
		font-size: 1.5rem;
	}
	a[href='/blockdoku'] {
		font-family: pixelifysans;
	}
	a[href='/wordle'] {
		font-family: vonique92;
	}
</style>
