<template>
  <div class="recommend">
    <div class="recomview" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  text-align: center;
  font-size: 14px;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.recomview {
  flex: 1;
}
.recomview img {
  height: 70px;
  width: 70px;
}
</style>