import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'
// main.js，注意要在use方法之后执行
import uView from 'uview-ui'
Vue.use(uView)
// 如此配置即可
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
