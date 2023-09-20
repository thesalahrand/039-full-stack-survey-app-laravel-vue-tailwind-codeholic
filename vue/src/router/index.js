import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import SurveysView from '../views/SurveysView.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import { useUserStore } from '../stores/user.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: DefaultLayout,
      meta: { requiresAuth: true },
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
      path: '/auth',
      component: AuthLayout,
      meta: { isGuest: true },
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.user?.token) next({ name: 'login' })
  else if (to.meta.isGuest && userStore.user?.token) next({ name: 'dashboard' })
  else next()
})

export default router
