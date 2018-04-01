import Vue from 'vue';
import app from './App';
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui'
import Icon from 'vue-svg-icon/Icon';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.component('icon', Icon);

new Vue({
  el: '#app',
  template: '<app/>',
  components: { app },
  router,
});
