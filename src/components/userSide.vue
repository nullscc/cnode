<template>
    <div class='sideDiv'>
        <div>
            <router-link :to='{name: "UserRoute",params:{name: userInfo.loginname}}'><img :src='userInfo.avatar_url'></router-link>
        </div>
        <div>{{userInfo.loginname}}</div>
        <p>
            https://github.com/{{userInfo.githubUsername}}
        </p>
    </div>
</template>

<script>
export default {
    name: 'SideSection',
    props: ['authorName'],
    data() {
        return {
            userInfo: {
                avatar_url: '',
                loginname: 'temp'
            },
        };
    },
    watch: {
        authorName(cur, old){
        const _this = this;
        if (this.authorName) {
            this.$http({
                url: `https://cnodejs.org/api/v1/user/${this.authorName}`,
                method: 'get'
            })
                .then(res => {
                    _this.userInfo = res.data.data;
                })
                .catch(res => {
                    console.log('SideSec.vue :', res);
                });
        }
     }
    }
};
</script>

<style>
.sideDiv{
  float: right;
  width: 270px;
}
</style>
