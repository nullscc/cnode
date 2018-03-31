import Vue from 'vue'
import Router from 'vue-router'
import MainSec from '@/components/MainSec'
Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    components:{
      main: MainSec,
    }
  }]
});
