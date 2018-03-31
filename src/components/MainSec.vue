<template>
    <div class='secDiv'>
        <div v-for='item of content'>
                <img :src='item.author.avatar_url' :title='item.author.loginname'>
            <div class='textDiv'>
                <h4>{{item.title}}</h4>
                <div class='stuff'>
                    <span>回复：{{item.reply_count}}</span>
                    <span>创建于：{{item.create_at | dealTime}}</span>
                </div>
            </div>
        </div>
    </div>

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
.secDiv {
  outline: solid 1px purple;
}
</style>
