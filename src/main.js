import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/directives' /* 组件，指令，插件等core统一入口 */
import { toast } from '@/plugins/plugins'

Vue.use(toast)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
