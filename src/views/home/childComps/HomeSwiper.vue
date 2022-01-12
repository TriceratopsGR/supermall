<template>
  <a-carousel autoplay>
    <div v-for="item in banners" :key="item.acm">
      <div class="carousel">
        <a :href="item.link"
          ><img class="carousel-img" :src="item.image" alt=""
        /></a>
      </div>
    </div>
  </a-carousel>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      required: true,
      default: "暂无",
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="css" scoped>
.carousel {
  width: 100%;
  height: 200px;
}
.carousel-img {
  width: 100%;
  height: 100%;
}
</style>
