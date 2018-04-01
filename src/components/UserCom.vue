<template>
    <el-container direction="vertical">
        <el-main class="main">
            <div>
                <img :src='userInfo.avatar_url' :title='userInfo.loginname'>
                <span>{{userInfo.loginname}}</span>
            </div>
            <p>
                <span>积分：</span>{{userInfo.score}}</p>
            <p>
                <span>Github：</span> https://github.com/{{userInfo.githubUsername}}</p>
            <p>
                <span>注册时间：</span>{{dealCommentTime(userInfo.create_at)}}</p>
        </el-main>

        <el-main class="main">
            <div class="recent-topic">
            <p>最近参与的话题</p>
            <template v-for='(item,index) of userInfo.recent_replies'>
                <div v-if='index < 4' :key='index' class="flex">
                    <router-link :to='{name: "UserRoute",params:{name: item.author.loginname}}'>
                        <img :src='item.author.avatar_url' :title='item.author.loginname'>
                    </router-link>
                    <router-link :to='{name: "ArticleRoute",params:{id:item.id}}'>
                        <p class='userTitle'>{{item.title}}</p>
                    </router-link>
                </div>
            </template>
            </div>

            <div class="recent-topic">
            <p>最近创建的话题</p>
            <template v-for='(item,index) of userInfo.recent_topics'>
                <div v-if='index < 5 && item' :key='index' class="flex">
                    <div>
                      <img :src='item.author.avatar_url' :title='item.author.loginname'>
                    </div>
                    <router-link :to='{name: "ArticleRoute",params:{id:item.id}}'>
                        <p class='userTitle'>{{item.title}}</p>
                    </router-link>
                </div>
            </template>
            </div>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                create_at: '2017-03-20',  //预设默认值：因为Vue会在一系列的初试化过程中调用此数据多次，而此时还有axios还没有执行到。如果没有默认值的话，会因为dealCommentTime中的方法保错：  0 of undefined....
            },
        };
    },
    created() {
        console.log(this.$route.path)
        this.$http({
            url: `https://cnodejs.org/api/v1${this.$route.path}`,
            method: 'get',
        }).then((res) => {
            this.userInfo = res.data.data;
        }).catch((res) => {
            console.log('UserCom.vue: ', res);
        });
    },
    methods: {
        dealCommentTime(time) {
            return String(time).match(/.{10}/)[0].replace(/.{2}/, '').replace(/[T]/, ' ');
        },
    },
    beforeRouteUpdate(to, from, next) {
        this.$http({
            url: `https://cnodejs.org/api/v1${to.path}`,
            method: 'get',
        }).then((res) => {
            this.userInfo = res.data.data;
        }).catch((res) => {
            console.log('UserCom.vue: ', res);
        });
        next();
    },
};
</script>

<style>
.main {
  background-color: #f0f2f7;
}
.recent-topic {
  background-color: #e6e9f1;
}
.flex {
  display: flex;
}
.flex > * {
  align-items: center;
  align-content: center;
}
</style>
