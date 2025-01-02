<script>
	import Navbar from '$lib/components/Navbar.svelte';
	let { data } = $props();
    const Content = data.content;
    const metadata = data.metadata;
</script>

<Navbar />

<div class="mx-auto my-8 max-w-fit">
	<h1 class="mx-auto text-4xl font-bold">{metadata.title}</h1>
	<div class="mt-4 flex items-center">
		<img
			src="https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_93_3235_3304/master/3235.jpg?width=700&quality=85&auto=format&fit=max&s=68f6a70c31fdd9fbdafce53e7d9b752c"
			class="mr-2 h-12 w-12 rounded-full bg-red-800 text-xl"
			alt="profile"
		/>

		<p class="text-xl font-semibold">{metadata.author}</p>
	</div>
	<article class="prose prose-sm mx-auto my-4 lg:prose-xl">
		<Content />
	</article>
</div>
