<template>
    <div id="app">
      <el-container>

        <el-header>
          <cnode-head></cnode-head>
        </el-header>

        <el-container>
          <el-main>
            <router-view name='main'></router-view>
          </el-main>
        </el-container>

      </el-container>
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
#app {
  margin: 0 8em;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: black;
} 

a:visited {
  color: #a1a1a2;
}

</style>

