// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueResource from "vue-resource";
import store from "./store";
import scrollReveal from 'scrollreveal';
import 'element-ui/lib/theme-chalk/index.css';

import echarts from 'echarts'

// import ElementUI from 'element-ui';
import { Button, Select,Option } from 'element-ui';
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$axios = axios;

Vue.prototype.$echarts = echarts;
/* eslint-disable no-new */
Vue.prototype.$scrollReveal = scrollReveal;

Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
