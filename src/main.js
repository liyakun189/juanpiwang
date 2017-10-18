// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//将路由模块导入
import router from './router'
//导入懒加载模块
import VueLazyload from 'vue-lazyload'
 
//全局注册
Vue.use(VueLazyload,{
  try:10//这个是加载图片的数量
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})
