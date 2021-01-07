<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ $store.state.cartList.length }})</div>
    </nav-bar>
    <scroll class="conter">
      <cart-list :cartInfo="cartInfo" />
    </scroll>
    <bottom-bar />
  </div>
</template>

<script>
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";

import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    BottomBar,
  },
  data() {
    return {
      cartInfo: null,
    };
  },
  mounted() {
    this.cartInfo = this.$store.state.cartList;
  },
};
</script>

<style scoped>
/* #cart {
  height: 100vh;
} */
.cart-nav {
  background-color: rgb(247, 235, 67);
}
.conter {
  /* height: calc(100%-100px);
  overflow: hidden; */
  position: absolute;
  top: 44px;
  bottom: 95px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
