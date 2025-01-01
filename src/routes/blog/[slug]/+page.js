import { error } from '@sveltejs/kit';

export async function load({ params }) {
    try {
        const post = await import(`../../../blog-posts/${params.slug}.svx`);

        return {
            content: post.default,
            metadata: post.metadata
        };
    }
    catch {
        error(404);
    }
}
