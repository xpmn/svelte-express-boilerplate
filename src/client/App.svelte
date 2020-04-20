<script>
  import Header from './components/Header.svelte';
  let name = 'Svelte Boilerplate'
</script>

<div class="page">
  <Header name={name} />
  This is an example of micro svelte app
</div>

<style global lang="scss" src="./styles/app.scss"></style>
