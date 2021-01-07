<template>
  <div class="check-button" :class="{ isChecked: isChecked }">
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  mame: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style  scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #e3e3e3;
  height: 16px;
}
.isChecked {
  border: 1px solid red;
  background-color: red;
}
</style>
