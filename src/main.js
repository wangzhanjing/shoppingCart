import Vue from 'vue'
import App from './App.vue'
// 引入 axios 库
import axios from 'axios'
// 第三方包里面某个css文件
import 'bootstrap/dist/css/bootstrap.css'

// 配置基础地址
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  render: h => h(App),
}).$mount('#app')
