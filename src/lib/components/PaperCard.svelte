<script>
	let { title, description, date, author } = $props();
	import { goto } from '$app/navigation';

	function open_blog_page() {
		goto('/blog');
	}
</script>

<div class="cursor-pointer bg-red-300 p-4" onclick={open_blog_page}>
	<h3>{title}</h3>
	<p>{description}</p>
	<small>{date}</small>
	<small>{author}</small>
</div>
