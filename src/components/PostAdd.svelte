<script>
    import { v4 as uuid } from 'uuid'
    import { posts } from './../store/store.js';
    let title = "";
    let text = "";

    const addPost = () => {
        posts.update((value) => [...value, {
				id: uuid(),
				title,
				text,
                created : new Date()
			}]);
            title = "";
            text = "";
    };
</script>

<input type="text" bind:value={title}>
<input type="text" bind:value={text}>
<button on:click={addPost}>
	Добавить пост
</button>

<hr>