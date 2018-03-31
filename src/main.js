import Vue from 'vue';
import app from './App';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<app/>',
  components: { app }
});
