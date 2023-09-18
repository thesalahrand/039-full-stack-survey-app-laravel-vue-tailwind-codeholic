import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import SurveysView from '../views/SurveysView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultLayout,
      children: [
        {
          path: 'dashboard',
          component: DashboardView,
          name: 'dashboard'
        },
        {
          path: 'surveys',
          component: SurveysView,
          name: 'surveys'
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
