import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Pets from '@/views/Pets.vue'
import AddPet from '@/views/AddPet.vue'

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
  },
  {
    path: '/add-pet',
    name: 'add-pet',
    component: AddPet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
