import Vue from 'vue'
import App from './App.vue'

import JNotice from './lib'
// import JNotice from '../dist/jnotice.umd.min.js'
// import '../dist/jnotice.css'
Vue.use(JNotice)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
