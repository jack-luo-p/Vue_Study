// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
import App from './App.vue'
import {mixin,mixin2} from './mixin'


Vue.config.productionTip = false

Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
  render: h => h(App)
}).$mount('#app')
