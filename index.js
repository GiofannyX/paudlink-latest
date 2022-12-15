import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'
import PaperView from '../views/PaperView.vue'
import AddView from '../views/AddView.vue'
import AddPaperView from '../views/AddPaperView.vue'
import AddWorkView from '../views/AddWorkView.vue'
import SystemView from '../views/SystemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/add-home',
      name:'add-home',
      component: AddView
    },
    {
      path:'/add-paper',
      name:'add-paper',
      component: AddPaperView
    },
    {
      path:'/add-work',
      name:'add-work',
      component: AddWorkView
    },
    {
     path:'/work',
     name: 'work',
     component: WorkView
    },
    {
     path:'/paper',
     name: 'paper',
     component: PaperView
    },
    {
     path:'/system',
     name: 'system',
     component: SystemView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
