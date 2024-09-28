// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  render: h => h(App)
}).$mount('#app')
