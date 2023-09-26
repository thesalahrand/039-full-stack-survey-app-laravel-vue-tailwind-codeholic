import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router'
import axiosClient from '../axios'

export const useUserStore = defineStore('user', () => {
  const user = ref(JSON.parse(sessionStorage.getItem('user')) || {})

  const register = (_user) => {
    return new Promise((resolve, reject) => {
      axiosClient
        .post('/register', _user)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error.response.data.errors))
    })
  }

  const login = (_user) => {
    return new Promise((resolve, reject) => {
      axiosClient
        .post('/login', _user)
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error.response.data.errors))
    })
  }

  const logout = () => {
    user.value = {}
    sessionStorage.removeItem('user')
    router.push({ name: 'login' })
  }

  return { user, register, login, logout }
})
