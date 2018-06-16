<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item :index="HOME_PAGE">Home</el-menu-item>
      <el-menu-item :index="LAZY_PICS_PAGE">Lazy Pictures</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  import {HOME_PAGE, LAZY_PICS_PAGE} from "./routes/nav-pages";

  export default {
    data() {
      return {
        activeIndex: '',
        HOME_PAGE: HOME_PAGE,
        LAZY_PICS_PAGE: LAZY_PICS_PAGE
      }
    },
    created: function () {
      this.activeIndex = this.$route.name;
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({name: key});
      }
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