// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Hello from './components/Hello.vue'

Vue.use(VueResource)

/* eslint-disable no-new */

router.map({
  '/hello': {
    component: Hello
  }
})

router.redirect({
  '*': '/hello'
})

router.start(App, '#app')
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })
