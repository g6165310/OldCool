import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Products from './components/Products.vue'
import Product from './views/Product.vue'
import ProductInfo from './views/ProductInfo.vue'
import Checkout from './views/Checkout.vue'
import Orders from './components/Orders.vue'
import Order from './views/Order.vue'
Vue.use(Router)

export default new Router({
  scrollBehavior(){
    return {x:0,y:0}
  },
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
    },
    {
      path: '/product/:productId',
      name: 'productInfo',
      component: ProductInfo,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
    {
      path:'/order/:orderId',
      name:'Order',
      component:Order,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
      ],
    },
  ]
})
