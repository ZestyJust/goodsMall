<template>
  <div v-if="Object.keys(params).lenght !== 0" class="params-info">
    <table
      v-for="(table, index) in params.tasizes"
      class="params-size"
      :key="index"
    >
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>
    <table class="params-sets">
      <tr v-for="(sets, index) in params.sets" :key="index">
        <td class="sets-key">{{ sets.key }}</td>
        <td class="sets-value">{{ sets.value }}</td>
      </tr>
    </table>
    <!-- <table>
      <tr v-for="(item, index) in params.tasizes[0]" :key="index">
        <td v-for="(item, index) in params.tasizes[0]." :key="index"></td>
      </tr>
    </table> -->
  </div>
</template>

<script>
export default {
  mame: "DetailParamsInfo",
  props: {
    params: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style  scoped>
.params-size,
.params-sets {
  padding: 0 10px;
  width: 100%;
}
.params-size tr td {
  padding: 14px 0;
  border-bottom: 1px solid #e8e8e8;
}
.params-sets tr {
  height: 47px;
}
.params-sets tr td {
  border-bottom: 1px solid #e8e8e8;
}
.params-sets .sets-key {
  width: 100px;
}
.params-sets .sets-value {
  color: rgb(252, 5, 5);
}
</style>
