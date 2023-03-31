import Vue from 'vue'
import VueRoute from 'vue-router'
// Vue.use(vueRoute)

const routes = [
  {
    path: '/home',
    component: () => import('@/views/home')
  }
]

const router = VueRoute.createRouter({
  routes
})

export default router