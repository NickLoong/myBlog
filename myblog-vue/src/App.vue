<template>
  <div id="app">
    <header>
      <div class="logo">的博客</div>
	  	<nav-menu class="blog-nav" :nav-list="navList"></nav-menu>
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
        {link:'/home/HelloWorld',text:'主页1'},
        {link:'/home/blog',text:'主页2'},
        {link:'/demo',text:'demo'},
        // {link:'/',text:'主页'},
        // {link:'/',text:'主页'},
      ],
      scrollReveal:this.$scrollReveal()
    };
  },
  created(){
    // setTimeout(() => {
    //   console
    // }, 10000);
  },
  mounted() {
    // this.scrollReveal.reveal(".logo");
    this.scrollReveal.reveal(".blog-nav", {
      //动画的时长
      duration: 1000,
      //延迟时间
      delay: 300,
      //动画开始的位置，'bottom', 'left', 'top', 'right'
      origin: "bottom",
      //回滚的时候是否再次触发动画
      reset: true,
      //在移动端是否使用动画
      mobile: true,
      //滚动的距离，单位可以用%，rem等
      distance: "20px",
      //其他可用的动画效果
      opacity: 0.001,
      easing: "linear",
      scale: 0.9
    });
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
  // height: 100%;
  // padding: 0 40px;
}
header {
  font-size: 16px;
  .logo {
		font-size: 40px;
		margin: 40px 0;
  }
}
header, article, footer {
    width: 1000px;
    margin: auto;
    overflow: hidden;
    .container{
      // background: url(../images/articlebg.png) repeat;
      overflow: hidden;
      margin: 20px;
      box-shadow: #075498 0px 1px 10px;
    }
}
article{
  background: url('./assets/img/articlebg.png') repeat
}
</style>
