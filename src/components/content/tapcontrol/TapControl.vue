<template>
  <div class="tap-control">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tap-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
   .
<script>
export default {
  name: "TapControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  // 记录当前选中
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tapClick", index);
    },
  },
};
</script>

<style scoped>
.tap-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
}
.tap-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 3px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>
