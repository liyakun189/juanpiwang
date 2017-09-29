import Vue from 'vue'

// 导入路由模块
import VueRouter from 'vue-router'

// 全局安装路由 (让任何组件都可以使用路由)
Vue.use(VueRouter);

// 导入vue-resource 来处理网络请求（2.x不推荐使用这个）
import resource from 'vue-resource'

// 全局配置一下
Vue.use(resource);

// 分别导入底部5个组件
import Home from '../pages/Home'
import Choose from '../pages/Choose'
import Shop from '../pages/Shop'
import Car from '../pages/Car'
import Mine from '../pages/Mine'

//导入登录组件
import Login from '../pages/Login'
//导入注册组件
import Reg from '../pages/Reg'


//分类页面.分类详细页面
import Sort from '../pages/Sort'
import SortInfo from '../pages/SortInfo'
// 一元购页面
import Ping from '../pages/Ping'
//商品详情页
import Product from '../pages/Product'
// 配置路由规则
const routes = [
    { path: '', component: Home },
    { path: '/home', component: Home},
    { path: '/choose', component: Choose },
    { path: '/shop', component: Shop },
    { path: '/car', component: Car},
    {path:'/mine',component:Mine},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:'/ping',component:Ping},    
    {path:'/sort',component:Sort},
    {path:'/sortInfo',component:SortInfo},
    {path:'/ping',component:Ping},
    {path:'/product',component:Product}    
]


// 创建路由实例
const router = new VueRouter({
    mode: 'history',
    // 路由规则
    routes
  })

// 因为把路由逻辑单独提出来了，所以我们要提供一个导出路由对象功能
 export default router
