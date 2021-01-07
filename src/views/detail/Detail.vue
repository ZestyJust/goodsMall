<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @itemClick="navClick" ref="navBar" />

    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-params-info ref="params" :params="params" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
    <detail-down-bar @addToCart="addToCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailDownBar from "./childComps/DetailDownBar";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getDetail, getrecommend, Goods, Shop, Params } from "network/detail";

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
    DetailCommentInfo,
    GoodsList,
    BackTop,
    DetailDownBar,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      params: {},
      commentInfo: {},
      recommend: [],
      clickToY: [],
      currindex: 0,
      isShowBackTop: false,
      taboffsetTop: 1500,
    };
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then((res) => {
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
      this.commentInfo = res.result.rate.list[0];
    });

    getrecommend().then((res) => {
      this.recommend = res.data.list;
    });
  },
  mounted() {
    setTimeout(() => {
      this.clickToY.push(0);
      this.clickToY.push(this.$refs.params.$el.offsetTop);
      this.clickToY.push(this.$refs.comment.$el.offsetTop);
      this.clickToY.push(this.$refs.recommend.$el.offsetTop);
      this.clickToY.push(Number.MAX_VALUE);
    }, 500);
  },
  methods: {
    navClick(index) {
      return this.$refs.scroll.scroll.scrollTo(0, -this.clickToY[index], 300);
    },
    detailScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      const positionY = -position.y;
      for (let i = 0; i < this.clickToY.length - 1; i++) {
        if (
          this.currindex !== i &&
          positionY >= this.clickToY[i] &&
          positionY <= this.clickToY[i + 1]
        ) {
          this.currindex = i;
          this.$refs.navBar.currentIndex = this.currindex;
        }
      }
    },
    // 监听返回顶部按钮
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    // 监听加入购物车
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.desc = this.goods.desc;
      product.title = this.goods.title;
      product.price = this.goods.lowNowPrice;
      this.$store.commit("addCartList", product);
    },
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
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
