import Vue from 'vue';
import app from './App';
import router from './router'
import axios from 'axios';
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<app/>',
  components: { app },
  router,
});
