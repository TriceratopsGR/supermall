<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar" />
    <router-view />
  </div>
</template>
<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
<style>
.main-tab-bar {
  z-index: 3;
}
</style>
