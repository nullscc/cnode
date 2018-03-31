<template>
    <div class='head'>
            <div class='dialogDiv'>
                <router-link :to='{name:"RootRoute"}'>回主页</router-link>

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
            </div>
    </div>
</template>

<style>
.dialogDiv {
  width: 980px;
  margin: 0 auto;
  margin-bottom: 4em;
  border-bottom: solid 1px #eee;
}
</style>
