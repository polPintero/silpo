<template>
  <div class="silpo">
    <!-- <div class="silpo__title">{{ title }}</div> -->
    <img src="https://silpo.ua/images/logo.svg" alt="">
    <div class="silpo__content">
      <component :is="getTag" v-if="step" @nextstep-disabled="isDisabled = $event"></component>
    </div>
    <div class="silpo__btn-control">
      <Vbutton :disabled="isDisabled" @click="nextStep" size="medium" type="primary" :loading="isloading">{{label}}</Vbutton>
    </div>
  </div>
</template>

<script>
import { Button as Vbutton } from 'element-ui';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

export default {
  components: { Vbutton, Step1, Step2, Step3 },
  name: 'Silpo',
  data() {
    return {
      title: 'Сильпо Тип-Топ',
      step: 1,
      isDisabled: true,
      isloading: false,
      label: 'Next'
    };
  },
  computed: {
    getTag() {
      return `Step${this.step}`;
    }
  },
  methods: {
    nextStep() {
      const { step } = this;
      if (step === 1) {
        this.step++;
        return;
      }
      if (step === 2) {
        this.isloading = true;
        setTimeout(() => {
          this.isloading = false;
          this.label = "Вези заказ, не томи"
          this.step++;
        }, 1000);
        return;
      }
      if (step === 3){
        const {cart, form} = this.$store.state;
        const data = {
          choices: cart.items,
          form: form.data
        };
        console.log(data);
        alert('Look into console (in Chrome CTRL+SHIFT+I)')
      }
    }
  }
};
</script>

<style lang="scss">
.silpo {
  &__content{
    margin-top: 20px;
  }
  &__btn-control {
    margin-top: 20px;
  }
}
</style>
