// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import $ from 'jquery'

Vue.use(VueFire)
Vue.config.productionTip = false

window.jQuery = window.$ = $
window.Tether = require('tether')

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'toastr/build/toastr.css'

require('bootstrap')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
