<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- 具名插槽 -->
    <div v-if="!isActive">
      <slot name="item-icon"> </slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <!-- 不能直接给插槽绑定css 因为他会被直接替换 -->
      <slot name="item-text"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabbaritem",
  props: {
    path: String,
    activeColor: {
      type: String,
      //默认为 pink
      default: "pink",
    },
  },
  data() {
    return {
      // isActive: true
    };
  },
  computed: {
    isActive() {
      // $route 拿到最活跃的路由
      //  /home -> item(/home) = true
      // indexOf 找到了 != -1
      // 我怎么想不到了
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  mounted() {},
  methods: {
    itemClick() {
      //console.log("itemClick");
      //让返回按钮不启用
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang="css" scoped>
.tab-bar-item {
  /* 均等分 */
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
