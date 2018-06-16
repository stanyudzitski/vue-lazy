<template>
  <div>
    <h1>App vue ROUTE component</h1>
    <el-button type="success" plain>Success</el-button>
  </div>
</template>

<script>
  export default {
    created: function () {
      console.log('App VUE HERE');
    }
  }
</script>

<style lang="scss">
  @import "../styles/main";

  h1 {
    font-family: Roboto;
    color: darkblue;

    @include title-mixin;
  }
</style>