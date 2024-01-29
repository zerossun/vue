import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test1 from '../components/test1.vue'
import Search from '../components/Search.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test1',
      name: 'test1',
      component: test1
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
