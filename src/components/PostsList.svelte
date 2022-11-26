<script>
	import { posts } from './../store/store.js';
    import PostAdd from './PostAdd.svelte';
    import Post from './Post.svelte';
	let editTitle = "";
    let editText = "";


    function removePost(id) {
		posts.update(value => {
			return value.filter(post => {
				return post.id !== id
			})
			
		})
    
	};

	
	function editPost(id, title, text) {
		posts.update(value => {
			return value.map(post => {
				if (post.id === id) {
					return {
						...post,
						title: editTitle,
						text: editText
						
					}
				} else {
					return post	
				}		
			})
		})
	};
    
</script>

<PostAdd />

{#each $posts as post, id }
<Post {...post} id={post.id}/>

<div class="edit-bar">
	<input type="text" bind:value={editTitle}>
	<input type="text" bind:value={editText}>

	<button on:click={() => editPost(post.id)}>Изменить</button>
	<button on:click={() => removePost(post.id)}>Удалить</button>
</div>




	<style>
		.box {
			width: 300px;
			border: 1px solid #aaa;
			border-radius: 2px;
			box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
			padding: 1em;
			margin: 0 0 1em 0;
		}
	</style>
			

{/each}