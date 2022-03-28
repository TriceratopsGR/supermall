<template>
  <div class="goods" ref="goods">
    <goods-list-item v-for="item in goods" :key="item.acm" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "Goodslist",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$refs.goods.offsetHeight;
  },

  methods: {},
};
</script>

<style lang="css" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
