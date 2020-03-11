<template>
  <el-popover placement="top" :width="'auto'" v-model="visible">
    <template v-if="inCart">
      <p>Are you sure to delete this?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="removeFromCart">confirm</el-button>
      </div>
    </template>
    <template v-if="!inCart">
      <p>Please enter quantity in {{ elem.packing }}</p>
      <div class="popup-content">
        <el-input-number v-model="num" :min="1" :max="99999" :precision="2" :step="0.1"></el-input-number>
        <div class="popup-content__btn">
          <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
          <el-button type="primary" size="mini" @click="addToCart">confirm</el-button>
        </div>
      </div>
    </template>

    <el-button slot="reference" size="mini" :type="typeBtn">{{ label }}</el-button>
  </el-popover>
</template>

<script>
export default {
  name: 'AddBtn',
  props: {
    elem: { type: Object },
  },
  data() {
    return {
      visible: false,
      num: 1,
    };
  },
  computed: {
    label() {
      return this.inCart ? 'Remove from cart' : 'Add to Cart';
    },
    inCart() {
      return !!this.elem.in_cart;
    },
    typeBtn() {
      return this.inCart ? 'default' : 'success';
    }
  },
  methods: {
    addToCart() {
      this.visible = false;
      const { elem, num } = this;
      elem.in_cart = true;
      this.$emit('add-to-cart', { elem, num });
    },
    removeFromCart() {
      this.visible = false;
      const { elem, num } = this;
      elem.in_cart = false;
      elem.num = 0;
      this.$emit('remove-from-cart', { elem, num });
    }
  }
};
</script>

<style lang="scss">
.popup-content {
  display: flex;
  flex-direction: column;
  &__btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
  }
}
</style>
