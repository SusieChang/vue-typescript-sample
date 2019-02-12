import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld.vue').then(m => m.default)
    },
    {
      path: '/TestJSX',
      name: 'TestJSX',
      component: () => import('@/components/TestJSX.vue').then(m => m.default)
    }
  ]
})
