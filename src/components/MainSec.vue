<template>
<el-container direction="vertical">
        <el-main v-for='item of content' :key='item.id' class="one-line">
            <div class="userimg">
              <img :src='item.author.avatar_url' :title='item.author.loginname'>
            </div>
            <div class="content">

              <div class="title">
                <router-link :to='{name:"ArticleRoute",params:{id:item.id}}'>
                  {{item.title}}
                </router-link>
              </div>

              <div class='stuff'>
                  <span>回复：{{item.reply_count}}</span>
                  <span>创建于：{{item.create_at | dealTime}}</span>
              </div>

            </div>
        </el-main>
</el-container>

</template>

<script>
console.log('Hello,Friend!');
export default {
    name: 'MainSection',
    data() {
        return {
            content: [],
            limit: 0,
        };
    },
    methods: {
        scrollMethod() {
            const sumH = document.body.scrollHeight || document.documentElement.scrollHeight;
            const viewH = document.documentElement.clientHeight;
            const scrollH = document.body.scrollTop || document.documentElement.scrollTop;
            if (viewH + scrollH >= sumH) {
                this.getData();
            }
        },
        getData() {
            this.limit += 10;
            this.$http({
                url: 'https://cnodejs.org/api/v1/topics',
                method: 'get',
                params: {
                    page: 1,
                    limit: this.limit,
                    mdrender: 'false',
                },
            }).then((res) => {
                this.content = res.data.data;
            }).catch((res) => {
                console.log('MaiSec.vue: ', res);
            });
        },
    },
  filters: {
    dealTime(value) {
        return String(value).match(/.{10}/)[0];
    },
  },
    created() {
        window.addEventListener('scroll', this.scrollMethod);
        this.getData();
    },
};
</script>


<style>
.one-line {
  display: flex;
  background-color: #f9fafc;
  border-bottom: solid 2px #aaa;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.userimg {
  height: 5em;
  width: 5em;
  margin-right: 2em;
}

.userimg img {
  width: 100%;
}

.stuff {
  color: #d4d9e0;
}

</style>
