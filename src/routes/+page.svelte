<script lang='ts'>
	const url = import.meta.env.BASE_URL;
	$:console.log(url)
</script>

<section>
	<h2 class="mb-10">choose a game</h2>
	<ul>
		<li><a href="{url}blockdoku" class="btn btn-outline text-blockdoku my-4">blockdoku</a></li>
		<li><a href="{url}wordle" class="btn btn-outline text-wordle my-4 pt-3 rounded-lg ">wordle</a></li>
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
