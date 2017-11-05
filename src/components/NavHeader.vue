<template>
    <header class="top bg-primary" >
        <div class="wrapper" style="position:relative">
            <div class="title">{{this.title}}</div>
            <div class="right wrapper">
                <div class="user-name left" v-if="this.username">{{this.username}}</div>
                <div class="btn" @click="this.clickFun">退出</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'header',
  components: {
  	
  },
  data() {
    return {
      
    }
  },
  props:{
    title:{
        type:String,
        default(){
            return '我的分享'
        }
    },
    username:{
        type:String,
        default(){
            return null
        }
    },
    clickFun:{
        type:Function,
        default(){
            
        }
    },
    isFixed:true
  },
  mounted() {

  },
  methods:{
      handleClick(){
          console.log('click header bth')
      }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .top{
        overflow: hidden;
        top:0%;
        height: 50px;
        width: 100%;
        line-height: 50px;
        padding: 0 20px;
        padding-right: 0;
        font-size: 18px;
        margin-bottom: 10px;
    }
    .title{
        float: left
    }
</style>
