<template>
  <div>
    <nav-bar>
      <div class="back" slot="left" @click="back">
        <img src="@/assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="item">
        <div
          class="item-title"
          v-for="(item, index) in titles"
          :key="index"
          :class="{ active: currentIndex === index }"
          @click="itemClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  mame: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style  scoped>
.item {
  display: flex;
  font-size: 13px;
}
.item-title {
  flex: 1;
}
.active {
  color: rgb(167, 26, 26);
}
.back img {
  margin-top: 12px;
  height: 20px;
  width: 20px;
}
</style>
