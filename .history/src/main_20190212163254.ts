// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App.vue'
// import 'vue-tsx-support/enable-check'

Vue.config.productionTip = false

/* eslint-disable no-new */
// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
