<script>
  export let name;
</script>

<div class="header">{name} app</div>

<style lang="scss">
  @import 'src/client/styles/_variables.scss';

  /* local styles: */
  .header {
    margin-top: 40px;
    font-size: 40px;
    color: $dark;
    font-weight: bold;
    margin-bottom: 40px;
  }
</style>
