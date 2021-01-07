<template>
  <div>
    <div class="icon-selector" :class="{ active: isChecked }">
      <img src="@/assets/img/cart/tick.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.icon-selector {
  display: inline-block;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  /* cursor: pointer; */
}

.active {
  background-color: red;
  border-color: red;
}
</style>
