<template>
  <!-- ref/children  -->
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //版本 2.0以上要加上 这个
      ObserverDom: true,

      //click: true,
    });
  },

  methods: {},
};
</script>

<style lang="css" scoped></style>
