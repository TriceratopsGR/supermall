<template>
  <!-- ref/children  -->
  <div ref="wrappers" class="wrapper">
    <div class="content">
      <!-- 插槽 -->
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
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrappers, {
      //版本 2.0以上要加上 这个
      ObserverDom: true,
      // 问题 加了 这个 可能会出现 不能滑动了
      //点击
      click: true,
      //监听滚动
      probeType: this.probeType,
      //上拉加载更多
      pullUpLoad: this.pullUpLoad,
    });

    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit("scroll", position);
    });

    //3.监听我们的上拉事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },

  methods: {
    //回到顶部
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style lang="css" scoped></style>
