<template>
    <div class='head'>
            <div class='dialogDiv'>
                <router-link :to='{name:"RootRoute"}'>
                  <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
                </router-link>

                <el-button type="text" @click='aboutShow=true'>关于</el-button>
                <el-dialog title="关于" :visible.sync="aboutShow">
                <span>
                    <strong>作者: &nbsp;&nbsp;</strong>
                </span>
                <a href='http://nulls.cc/' target='_blank'>null</a>
                </span>
                <br>
                <span>
                    <strong>源代码: &nbsp;&nbsp;</strong>
                </span>
                <a href='https://github.com/nullscc/cnode' target='_blank'>Github</a>
                <span class='star'>&nbsp;&nbsp;Star</span>
                <br>
                <br>
                <span>
                    <strong>技术栈: </strong>
                </span>
                <ul>
                    <li>Vue.js</li>
                    <li>Vue-router</li>
                    <li>Axios</li>
                    <li>Element</li>
                    <li>CnodeJS API</li>
                </ul>
                </el-dialog>
            </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      aboutShow: false,
    }
  }

};
</script>

<style>
</style>
