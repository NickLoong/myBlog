import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Blog from '@/components/Blog'
import demo from '@/components/demo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: 'blog',
          component: Blog
        }
      ]
    },
    {
      path:'/demo',
      name:"demo",
      component:demo
    }
  ]
})
