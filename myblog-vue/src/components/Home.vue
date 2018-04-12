<template>
  <div class="home">
    <h1>这是主页</h1>
    <div data-scroll-reveal>dowebok.com</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    
  },
  mounted(){
    
  },
  updated(){
    window.scrollReveal = new scrollReveal();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        height: 100%;
        width: 100%;
        /* background: red */
    }
</style>
