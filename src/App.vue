<template>
  <div id="app">
    <nav-header class="top" :title="title" :username='username' :click-fun="logout" v-if="isHeader === true"></nav-header>
    <router-view/>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader'
export default {
  name: 'app',
  components: {
    NavHeader
  },
  data(){
    return{
      title:'主页',
      isHeader: true,
      username:'失落忆'
    }
  },
  mounted(){
    // $(document).ready(function () { //本人习惯这样写了
    //   $(window).scroll(function () {
    //       //$(window).scrollTop()这个方法是当前滚动条滚动的距离
    //       //$(window).height()获取当前窗体的高度
    //       //$(document).height()获取当前文档的高度
    //       var bot = 50; //bot是底部距离的高度
    //       if($(window).scrollTop()>25){
    //         $('.top').slideUp();
    //         // this.isHeader=false;
    //         // console.log(this.isHeader);
    //       }else{
    //         $('.top').slideDown();
    //       }
    //   });
    // });
  },
  methods:{
    logout:function(){
        console.log('退出')
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* margin-top: 60px; */
}
/*@import './assets/init.css'*/
/*公共样式*/
/*顶部*/
div{
  position: relative;
}
body{
  position: relative;
  font-family: "微软雅黑"
}
a {
    text-decoration: none;
    /** 去除阴影*/
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
a{
  color: #000
}
input,button,select,textarea{
  outline:none
}
body{
  position: relative;
}
input:focus{
    border:0;
}
textarea{
  border: 0
}
button{
  border:0rem
}
ul {
    overflow: hidden;
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
    margin:0
}


/* 公共样式 */
.wrapper{
  overflow:hidden;
  display :relative;
}
.right{
  float: right;
}
.left{
  float: left;
}
.fixed{
  position: fixed
}
</style>
