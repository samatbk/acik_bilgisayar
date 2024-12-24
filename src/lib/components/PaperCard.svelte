<script>
	let { title, description, date, author } = $props();
	import { goto } from '$app/navigation';

	function open_blog_page() {
		goto('/blog');
	}

	let img_src =
		'https://i.guim.co.uk/img/media/02088fb2247b13df646907d47f552dc69a236bc7/0_93_3235_3304/master/3235.jpg?width=700&quality=85&auto=format&fit=max&s=68f6a70c31fdd9fbdafce53e7d9b752c';
</script>

<div
	class="flex cursor-pointer items-center justify-between rounded-md border-2 border-slate-900 p-4 shadow-md hover:scale-105"
	onclick={open_blog_page}
	role="link"
	tabindex="0"
>
	<div class="flex h-full min-h-32 flex-col justify-between">
		<div>
			<h3 class="font-bold">{title}</h3>
			<p class="font-regular text-slate-600">{description}</p>
		</div>
		<small class="self-start font-light underline">@{author}</small>
	</div>

	<img src={img_src} class="w-32 flex-shrink-0 rounded-md object-cover" alt="post" />
</div>
