<template>
    <div class="article">
      <div class='secDiv'>
          <span class='marginSpan'>发布于：{{createdTime}}</span>
          <router-link :to='{name:"UserRoute",params:{name: article.author.loginname}}'>作者：{{article.author.loginname}}</router-link>
          <span class='marginSpan'>浏览量：{{article.visit_count}}</span>
          <span>来自：{{article.tab}}</span>
          <h3>{{article.title}}</h3>
          <div v-html='article.content' id='content'></div>
          <div id='reply'>
              <div v-for='reply in article.replies' class='replySec' :key='reply.length'>
                  <router-link :to='{name: "UserRoute",params:{name: reply.author.loginname}}'><img :src='reply.author.avatar_url'></router-link>
                  <div>
                      <div class='replyUp'>
                          <span class='replyName'>{{reply.author.loginname}}</span>
                          <span>{{reply.create_at | dealCommentTime}}</span>
                          <span v-if='reply.ups.length > 0' class='thumbsClass'>
                              <span>{{reply.ups.length}}</span>
                          </span>
                      </div>
                      <p v-html='reply.content'></p>
                  </div>
              </div>
          </div>
      </div>
    <user-side :author-name="uname"></user-side>    
    </div>
</template>

<script>
import userSide from './userSide';

export default {
    components: {
      userSide,
    },
    data() {
        return {
            article: {
                title: '',
                author: {
                    loginname: 'temp',
                },
                visit_count: '',
                tab: '',
                content: '',
                create_at: '2017-04-130000',
                replies: '',
            },
        };
    },
    computed: {
        createdTime() {
            return String(this.article.create_at).match(/.{10}/)[0];
        },
        uname() {
          return String(this.article.author.loginname);
        },
    },
    filters: {
        dealCommentTime(time) {
            return String(time).match(/.{16}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
        },
    },
    beforeCreate() {
        this.$http({
            url: `https://cnodejs.org/api/v1${this.$route.path}`,
            method: 'get',
        }).then((res) => {
            if (res.data.success === true) {
                this.article = res.data.data;
                this.$emit('sendAuthorName',this.article.author.loginname);
            } else {
                this.article = 'Sorry, Something wrong happened when getting the remote data';
            }
        }).catch((res) => {
            console.log('ArticleCom.vue: ', res);
        });
    },
};
</script>

<style>
.secDiv {
  float: left;
  width: 700px;
}
.article {
  width: 980px;
  margin: 0 auto;
}
</style>
