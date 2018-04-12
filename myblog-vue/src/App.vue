<template>
  <div id="app">
    <header>
      <div class="logo">的博客</div>
	  	<nav-menu :nav-list="navList"></nav-menu>
    </header>
    <article>
      <router-view/>
    </article>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue'
export default {
	name: "App",
	components:{
		'nav-menu':NavMenu
	},
  data() {
    return {
      navList:[
        {link:'/',text:'主页'},
        {link:'/',text:'主页'},
        {link:'/',text:'主页'},
        {link:'/',text:'主页'},
      ]
    };
  },
  mounted() {

  }
};
</script>

<style lang="less">
@import './assets/init.css'; //引入全局css文件
@boxWidth:1000px;
html,
body,
h1 {
  padding: 0;
  margin: 0;
}
body {
  font: 14px "微软雅黑", Arial, Helvetica, sans-serif;
  background: url(./assets/top.jpg) no-repeat center top #075498;
  color: #fff;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  padding: 0 40px;
}
header {
  font-size: 16px;
  .logo {
		font-size: 40px;
		height: 100px;
		line-height: 100px;
  }
}
header, article, footer {
    width: 1000px;
    margin: auto;
    overflow: hidden;
}
</style>
