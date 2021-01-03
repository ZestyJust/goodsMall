<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div>
      <h3 class="detail-title">{{ goods.title }}</h3>
    </div>
    <div class="detail-price">
      <span>{{ goods.price }}</span>
      <p>{{ goods.oldPrice }}</p>
      <h4>{{ goods.discountDesc }}</h4>
    </div>
    <div class="detail-columns">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="detail-services">
      <span
        class="services-item"
        v-for="(item, index) in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index].icon" alt="" />
        <span>{{ goods.services[index].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  mame: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      defaullt() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
.detail-title {
  padding: 12px 2px 0px 6px;
}
.detail-price {
  margin-top: 10px;
}
.detail-price span {
  margin-left: 6px;
  color: rgb(248, 11, 141);
  font-size: 20px;
  font-weight: 700;
}
.detail-price p {
  margin-left: 6px;
  display: inline;
  font-size: 10px;
  text-decoration: line-through;
}
.detail-price h4 {
  font-size: 12px;
  margin-left: 6px;
  position: relative;
  bottom: 8px;
  padding: 2px;
  display: inline;
  background-color: rgb(248, 11, 141);
  color: rgb(255, 255, 255);
  border-radius: 6px;
}
.detail-columns {
  margin: 10px 6px;
  line-height: 30px;
  display: flex;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  justify-content: space-between;
}
.detail-services {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  margin: 0 6px;
  line-height: 40px;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
}
.services-item img {
  height: 10px;
  width: 10px;
}
</style>
