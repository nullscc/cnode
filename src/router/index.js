import Vue from 'vue'
import Router from 'vue-router'
import MainSec from '@/components/MainSec'
import ArticleCom from '@/components/ArticleCom';
import UserCom from '@/components/UserCom';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components:{
        main: MainSec,
      }
    },
    {
      path: '/topic/:id',
      name: 'ArticleRoute',
      components: {
          main: ArticleCom,
      },
    },
    {
        path: '/user/:name',
        name: 'UserRoute',
        components: {
            main: UserCom,
        },
    }
  ]
});
