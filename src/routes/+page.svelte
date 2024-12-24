<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import PaperCard from '$lib/components/PaperCard.svelte';
	import PenIcon from 'svelte-remixicon/RiPencilLine.svelte';
</script>

<Navbar />

<h1 class="m-32 text-4xl font-bold">
	"Soru soran kişi <mark>bir dakikalığına</mark> aptal, sormayan ise <mark>ömür boyu</mark> aptaldır."
</h1>

<div id="yazilar" class="m-8">
	<PenIcon class="w-8" />
	<h3 class="mb-4 text-3xl font-light underline">Yazilar</h3>
	<ul class="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
		{#each { length: 8 } as _, i}
			<li>
				<PaperCard title="title" description="Description" date={i} author="author" />
			</li>
		{/each}
	</ul>
</div>

<div id="tutorialler" class="m-8">
	<h3 class="mb-4 text-3xl font-light underline">Tutoriallar</h3>
</div>
