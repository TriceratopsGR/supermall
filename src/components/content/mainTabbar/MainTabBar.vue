<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="item-icon" src="../../../assets/img/tabber/home.svg" alt="" />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabber/home_active.svg"
        alt=""
      />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="rebeccapurple">
      <img
        slot="item-icon"
        src="../../../assets/img/tabber/category.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabber/category_active.svg"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img
        slot="item-icon"
        src="../../../assets/img/tabber/shopcart.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabber/shopcart_active.svg"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img
        slot="item-icon"
        src="../../../assets/img/tabber/profile.svg"
        alt=""
      />
      <img
        slot="item-icon-active"
        src="../../../assets/img/tabber/profile_active.svg"
        alt=""
      />
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";
export default {
  name: "Maintabbar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style lang="css" scoped></style>
