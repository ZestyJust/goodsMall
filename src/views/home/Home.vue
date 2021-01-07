<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tap-control
      class="top-control"
      :titles="['流行', '新款 ', '精选']"
      @tapClick="tapClick"
      ref="tabContrue1"
      v-show="isShowTab"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tap-control
        :titles="['流行', '新款 ', '精选']"
        @tapClick="tapClick"
        ref="tabContrue2"
      />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>
    

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TapControl from "components/content/tapcontrol/TapControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TapControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      taboffsetTop: 0,
      isShowTab: false,
      saveY: 0,
    };
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0, this.saveY, 20);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
  },
  created() {
    /* 1.请求多个数据(网络) */
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    setTimeout(() => {
      this.taboffsetTop = this.$refs.tabContrue2.$el.offsetTop;
    }, 1000);
  },
  methods: {
    tapClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabContrue1.currentIndex = index;
      this.$refs.tabContrue2.currentIndex = index;
    },

    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },

    contentScroll(prosition) {
      this.isShowBackTop = -prosition.y > 1000;
      this.isShowTab = -prosition.y > this.taboffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh;
}
.home-nav {
  background-color: #ff8198;
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}
#home ul {
  text-align: center;
}
/* .fixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0; 
}*/
.top-control {
  position: relative;
  z-index: 9;
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
