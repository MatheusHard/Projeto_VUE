import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
  {
    path: '/medico',
    name: 'Medico',
    
    component: () => import(/* webpackChunkName: "medico" */ '../views/Medico/Medico.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router