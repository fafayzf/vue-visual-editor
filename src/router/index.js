import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/visualWeb/index.vue')
  },
  {
    path: '/visualDisgn',
    name: 'visualDisgn',
    component: () => import(/* webpackChunkName: "about" */ '../views/visualDesign/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
