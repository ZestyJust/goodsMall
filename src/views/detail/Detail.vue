<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="detail-content">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-params-info :params="params" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo.vue";

import Scroll from "components/common/scroll/Scroll.vue";

import { getDetail, Goods, Shop, Params } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamsInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      params: {},
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
      console.log(res);
      this.topImages = res.result.itemInfo.topImages;
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      this.shop = new Shop(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      this.params = new Params(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
    });
  },
};
</script>
<style  scoped>
#detail {
  /* position: relative;
  z-index: 11;
  background-color: #fff; */
  height: 100vh;
}
.detail-content {
  position: absolute;
  top: 44px;
  bottom: 0px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
