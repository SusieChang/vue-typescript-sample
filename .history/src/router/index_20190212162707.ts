import Vue from 'vue'
import Router from 'vue-router'
// import TestJSX from '@/components/TestJSX.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue')
    }
    // {
    //   path: '/TestJSX',
    //   name: 'TestJSX',
    //   component: TestJSX
    // }
  ]
})
