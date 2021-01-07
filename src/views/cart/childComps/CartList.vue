<template>
  <div class="cart-list">
    <div class="list-info" v-for="(item, index) in cartInfo" :key="index">
      <div class="item-selector">
        <check-button
          :isChecked="item.checked"
          @click.native="checkClick(index)"
        >
        </check-button>
      </div>
      <div class="item-img">
        <img :src="item.image" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{ item.title }}</div>
        <div class="item-desc">{{ item.desc }}</div>
        <div class="info-bottom">
          <div class="item-price left">¥{{ item.price }}</div>
          <div class="item-count right">x{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  mame: "CartList",
  components: {
    CheckButton,
  },
  props: {
    cartInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    checkClick(index) {
      this.cartInfo[index].checked = !this.cartInfo[index].checked;
    },
  },
};
</script>

<style  scoped>
.list-info {
  padding: 5px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  align-items: center;
}
.item-selector {
  margin: 0 6px 0 16px;
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  width: 200px;
  text-overflow: ellipsis;
  color: #000;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  height: 100px;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-right: 10px;
  position: absolute;
  bottom: 0px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>
