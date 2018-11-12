<template>
  <div class="home container">
    <!-- <div class="blog">
      <figure></figure>
      <figure></figure>
      <figure></figure>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import scrollReveal from "scrollreveal";
export default {
  name: "Home",
  data() {
    return {
      scrollReveal: this.$scrollReveal()
    };
  },
  created() {},
  mounted() {
    this.initscrollReveal()
  },
  updated() {},
  activated() {},
  methods: {
    initscrollReveal() {
      this.$scrollReveal().reveal(".blog");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.home {
  height: 100%;
  // width: 100%;
  /* background: red */
  .blog{
    margin: 30px 20px;
    overflow: hidden;
    figure{
      background: #ececec;
      border: #FFF 10px solid;
      width: 270px;
      height: 430px;
      float: left;
      margin: 0 8px 0;
      overflow: hidden;
    }
  }
}
</style>
