import Vue from 'vue'
import bootstrap from '@/modules/bootstrap'
import http from '@/http'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  bootstrap,
  router,
  store,
  http,
  render: h => h(App)
}).$mount('#app')
