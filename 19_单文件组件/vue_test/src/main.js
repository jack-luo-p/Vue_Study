// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 使用插件
new Vue({
  render: h => h(App),
}).$mount('#app')
