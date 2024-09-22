// 该文件是整个项目的入口文件
// 引入Vue
import Vue from 'vue'
import App from './App.vue'
// 引入插件
import plugins from './plugins'

Vue.config.productionTip = false

// 使用插件
Vue.use(plugins,1,2,3)
new Vue({
  render: h => h(App)
}).$mount('#app')
