<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" />
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
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
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
再点击事件中加给判断，if( this.$route.path.indexOf(detail) !==-1)
这样才进行路由跳转，else { return false}
应为 indexOf( 'home' )
