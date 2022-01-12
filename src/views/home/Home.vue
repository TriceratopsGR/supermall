<template>
  <div id="home">
    <nav-bar class="home-nva">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
      <!-- 轮播图 -->
      <hello-world :banners="banners" />
      <recommend-view :recommend="recommend" />
      <feature-view />
      <tab-control
        class="tab-control"
        @tabClick="tabClick"
        :titles="['流行', '新款', '精选']"
      />
      <goods-list :goods="currentType" />
    </scroll>
    <back-top></back-top>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbae/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import HelloWorld from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop.vue";

import { getHomeMultidata, grtHomeGoods } from "../../network/home";

export default {
  name: "Home",

  data() {
    return {
      banners: [],
      recommend: [],
      // keyword: [],
      // dKeyword: [],
      goods: {
        pop: { type: "pop", page: 0, list: [] },
        new: { type: "new", page: 0, list: [] },
        sell: { type: "sell", page: 0, list: [] },
      },
      currentType: [],
    };
  },
  components: {
    NavBar,
    TabControl,
    GoodsList,

    HelloWorld,
    RecommendView,
    FeatureView,
    Scroll,
    BackTop,
  },
  created() {
    //1.请求多个数据
    //轮播图
    this.grtHomeMultidata();
    // 请求商品数据;
    this.grtHomeGoods(this.goods.pop.type);
    this.grtHomeGoods(this.goods.new.type);
    this.grtHomeGoods(this.goods.sell.type);
    this.currentType = this.goods.pop.list;
  },
  methods: {
    //事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = this.goods.pop.list;
          break;
        case 1:
          this.currentType = this.goods.new.list;
          break;
        case 2:
          this.currentType = this.goods.sell.list;
          break;
      }
    },
    //网络请求
    grtHomeMultidata() {
      getHomeMultidata().then((res) => {
        console.log(res.data);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    grtHomeGoods(type) {
      const page = this.goods[type].page + 1;
      grtHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        console.log(res);
      });
    },
  },
};
</script>

<style lang="css" scoped>
#home {
  padding-top: 44px;
  /* vh 视口高度 */
  height: 100vh;
  position: relative;
}
.home-nva {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  /*  */
  position: sticky;
  top: 44px;
  z-index: 2;
}
.content {
  /* j计算高度 */
  /* height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;*/

  /* 定位 */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
