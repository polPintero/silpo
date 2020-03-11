<template>
  <div class="form">
    <Vform :model="ruleForm" :rules="rules" :label-position="labelPosition" size="small" ref="formData">
      <FormItem label="Your Name" prop="name">
        <Vinput v-model="ruleForm.name" />
      </FormItem>
      <FormItem label="Your Phone" prop="phone">
        <Vinput v-model="ruleForm.phone" />
      </FormItem>
      <FormItem label="Your Address" prop="address">
        <Vinput type="textarea" v-model="ruleForm.address" />
      </FormItem>
      <FormItem label="Number Your Card (власный рахунок)" prop="card">
        <Vinput v-model="ruleForm.card" />
      </FormItem>
      <FormItem label="Pay method" prop="pay_method">
        <Vselect v-model="ruleForm.pay_method" placeholder="Select pay method" filterable>
          <Voption v-for="method in payChoices" :key="method.id" :label="method.label" :value="method.id" />
        </Vselect>
      </FormItem>
      <FormItem label="Choose delivery time " prop="delivery_time">
        <DatePicker
          v-model="ruleForm.delivery_time"
          type="datetime"
          placeholder="Select date and time"
          default-time="12:00:00"
        />
      </FormItem>
    </Vform>
  </div>
</template>

<script>
import { Form as Vform, FormItem, Input as Vinput, Select as Vselect, Option as Voption, DatePicker } from 'element-ui';
const payChoices = [
  { label: 'Card', id: 'card' },
  { label: 'Cash', id: 'cash' }
];

export default {
  name: 'Step2',
  components: {
    Vform,
    FormItem,
    Vinput,
    Vselect,
    Voption,
    DatePicker
  },
  data() {
    return {
      labelPosition: 'top',
      ruleForm: {
        name: '',
        phone: '',
        address: '',
        card: '',
        pay_method: '',
        delivery_time: ''
      },
      rules: {
        name: [{ required: true, message: 'Please input this field', trigger: 'change' }],
        phone: [{ required: true, message: 'Please input this field', trigger: 'change' }],
        address: [{ required: true, message: 'Please input this field', trigger: 'change' }],
        pay_method: [{ required: true, message: 'Make your choice please', trigger: 'change' }],
        delivery_time: [{ required: true, message: 'Make your choice please', trigger: 'change' }]
      },
      payChoices,
      field: 'form_data'
    };
  },
  created() {
    this.$emit('nextstep-disabled', true);
  },
  watch: {
    ruleForm: {
      deep: true,
      handler(e) {
        this.$store.commit('TO_SERVER', { field: this.field, value: e });
        this.$refs.formData.validate(valid => {
          this.$emit('nextstep-disabled', !Boolean(valid));
        });
      }
    }
  }
};
</script>

<style lang="scss">
.form {
  max-width: 50vw;
  margin: auto;
}
</style>
