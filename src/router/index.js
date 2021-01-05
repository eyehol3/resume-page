import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/webdev',
    name: 'webdev',
    component: Home
  },
  {
    path: '/design',
    name: 'design',
    component: Home
  },
  {
    path: '/video',
    name: 'video',
    component: Home
  },
  {
    path: '/music',
    name: 'music',
    component: Home
  },
  {
    path: '/bigdata',
    name: 'bigdata',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
