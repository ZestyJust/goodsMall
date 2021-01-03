<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" />
    <p>{{ goodsItem.title }}</p>
    <span>{{ goodsItem.price }}</span>
    <span>{{ goodsItem.cfav }}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  margin-left: 4px;
}
.goods-item img {
  width: 100%;
  height: 80%;
  border-radius: 15px;
}
.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
