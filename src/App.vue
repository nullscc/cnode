<template>
    <div id="app">
    <cnode-head></cnode-head>
    <router-view name='main'></router-view>

    </div>
</template>

<script>
import cnodeHead from './components/cnodeHead';

export default {
    name: 'app',
    components: {
      cnodeHead,
    },
};
</script>

<style>
</style>

