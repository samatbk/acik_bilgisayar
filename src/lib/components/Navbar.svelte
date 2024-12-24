<script>
	import SearchIcon from 'svelte-remixicon/RiSearchLine.svelte';
</script>

<nav class="sticky top-0 flex items-center justify-around bg-sky-50">
	<a class="rounded-sm bg-slate-900 px-2 text-xl font-bold text-sky-50" href="/">Acik Bilgisayar</a>
	<div class="relative w-2/5">
		<input
			type="text"
			placeholder="Ara..."
			class="w-full rounded-md bg-slate-200 px-8 py-1 pr-10"
		/>
		<SearchIcon class="absolute left-2 top-1/2 -translate-y-1/2 transform" />
	</div>

	<div class="flex items-center justify-center">
		<a href="/hakkimizda" class="p-2 text-xl font-medium underline">Hakkimizda</a>
	</div>
</nav>
