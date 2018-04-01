<template>
    <el-container class="all">
      <el-main>
        <el-container>
          <el-header>
            <span class='marginSpan'>发布于：{{createdTime}}</span>
            <router-link :to='{name:"UserRoute",params:{name: article.author.loginname}}'>作者：{{article.author.loginname}}</router-link>
            <span class='marginSpan'>浏览量：{{article.visit_count}}</span>
            <span>来自：{{article.tab}}</span>
            <h3>{{article.title}}</h3>
          </el-header>

          <el-main>
            <div v-html='article.content' id='content'></div>
            <el-container direction="vertical" class="reply">
                <div v-for='reply in article.replies' class='replySec' :key='reply.length'>
                    <router-link :to='{name: "UserRoute",params:{name: reply.author.loginname}}'>
                    <div class="img">
                      <img :src='reply.author.avatar_url'>
                    </div>
                    </router-link>

                  <div class="stuff">
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
            </el-container>
          </el-main>
        </el-container>
      </el-main>

      <el-aside>
        <user-side :author-name="uname"></user-side>    
      </el-aside>

    </el-container>
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
.all {
  background-color: #f9fafc;
  word-break: break-all;
}


#content {
  background-color: #f0f2f7;
  padding: .51em;
  word-wrap: break-word;
  overflow: hidden;
}
.img {
  width: 5em;
  height: 5em;
  margin-right: 1em;
}

img {
  max-height: 100%;
  max-width: 100%;
}

.replySec {
  display: flex;
  border-bottom: solid 2px #aaa;
  padding: .5em 0;
}
.stuff {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
