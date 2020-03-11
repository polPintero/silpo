<template>
  <div>
    <Vselect v-model="value" placeholder="Select shop" filterable>
      <Voption v-for="shop in shops" :key="shop.id" :label="shop.label" :value="shop.id" />
    </Vselect>
  </div>
</template>

<script>
import { Select as Vselect, Option as Voption } from 'element-ui';
import { shops } from '../base';
export default {
  name: 'Step1',
  components: {
    Vselect,
    Voption
  },
  data() {
    return {
      shops,
      value: '',
      field: 'shop_id'
    };
  },
  watch: {
    value: function(e) {
      this.$emit('nextstep-disabled', !Boolean(e));
      this.$store.commit('TO_SERVER', { field: this.field, value: e });
    }
  }
};
</script>

<style lang="scss"></style>
