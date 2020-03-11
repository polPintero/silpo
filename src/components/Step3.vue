<template>
  <div>
    <Vtable :data="goods" max-height="80vh">
      <TableColumn label="Name of Good" prop="label" sortable></TableColumn>
      <TableColumn
        label="Category"
        prop="category"
        sortable
        :filters="filtersCategory"
        :filter-method="getfilterCategory"
      ></TableColumn>
      <TableColumn>
        <template slot="header">
          <Vinput v-model="search" size="mini" placeholder="Type to search" />
        </template>
        <template slot-scope="scope">
          <AddBtn :elem="scope.row" @add-to-cart="addToCart" @remove-from-cart="removeFromCart" />
        </template>
      </TableColumn>
    </Vtable>
  </div>
</template>

<script>
import { Table as Vtable, TableColumn, Input as Vinput } from 'element-ui';
import AddBtn from './AddBtn';
import { goods } from '../base';
export default {
  name: 'Step3',
  components: {
    Vtable,
    TableColumn,
    Vinput,
    AddBtn
  },
  data() {
    return {
      goods,
      search: ''
    };
  },
  created() {
    this.$emit('nextstep-disabled', true);
  },
  computed: {
    filtersCategory() {
      const { goods } = this;
      const rez = {};
      goods.forEach(i => {
        rez[i.category] = i.category;
      });
      const result = Object.keys(rez).map(key => {
        return { text: key, value: key };
      });
      return result;
    },
    cart() {
      return this.$store.state.cart.items;
    }
  },
  watch: {
    cart: function(e) {
      this.$emit('nextstep-disabled', e.length === 0);
    }
  },
  methods: {
    addToCart(event) {
      const { elem, num } = event;
      this.$store.commit('ADD_TO_CART', { id: elem.id, num });
    },
    removeFromCart(event) {
      const { elem } = event;
      this.$store.commit('REMOVE_FROM_CART', elem.id);
    },
    getLabel(item) {
      return item.in_cart ? 'Remove from cart' : 'Add to Cart';
    },
    getfilterCategory(value, row) {
      return row.category === value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
