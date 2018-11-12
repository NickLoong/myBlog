<template>
  <nav class="nav">
      <div class="link" v-for="item in navList">
        <router-link :to="item.link">{{item.text}}</router-link>
      </div>
  </nav>
</template>
<script>

export default {
  name: "NavMenu",
  data() {
    return {
      // pages: []
    };
  },
  props: {
    navList: {
      type: Array,
      default() {
        return [
          // {
          //   link:'/',
          //   text:'主页'
          // },
          // {
          //   link:'/',
          //   text:'主页'
          // }
        ];
      }
    }
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
nav {
  margin-bottom: 40px;
  .link{
    position: relative;
    display: inline-block;
    font-size: 18px;
    margin-right: 30px;
  }
}
</style>


