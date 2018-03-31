<template>
    <div id="app">
    <cnode-head></cnode-head>
    </div>
</template>

<script>
import cnodeHead from './components/cnodeHead';

export default {
    name: 'app',
    data() {
      return {
        msg: 'hello vue',
      };
    },
    components: {
      cnodeHead,
    },
};
</script>

