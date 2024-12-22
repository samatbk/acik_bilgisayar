<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import PaperCard from '$lib/components/PaperCard.svelte';
</script>

<Navbar />

<div id="yazilar" class="m-4">
	<h3 class="text-lg font-bold underline">Yazilar</h3>
	<ul class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
		{#each { length: 8 } as _, i}
			<li>
				<PaperCard title="title" description="Description" date={i} author="author" />
			</li>
		{/each}
	</ul>
</div>
