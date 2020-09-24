import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Pets from '@/views/Pets.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pets/:type',
    name: 'pets',
    component: Pets
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
