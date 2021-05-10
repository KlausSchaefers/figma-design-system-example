import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Playground from '../views/Playground.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/play.html',
    name: 'Home',
    component: Playground
  }
]

const router = new VueRouter({
  routes
})

export default router
