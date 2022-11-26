<script>
	export let title = "Заголовок"
	export let text = "Текст"
	export let created = new Date();
	export let editBar = { loggedIn: false };

	
	function toggle() {
		editBar.loggedIn = !editBar.loggedIn;
	}

	
</script>

<div class="box">
	<h4>
		{title}
	</h4>
	<p>
		{text}
	</p>

	<div>
		{created}
	</div>

	{#if editBar.loggedIn}
	<button on:click={toggle}>
		Изменить
	</button>
{/if}

{#if !editBar.loggedIn}
	<button on:click={toggle}>
		Изменить
	</button>
	
	<style>
		.edit-bar {
			display: none;
		}
	</style>
	
{/if}

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



