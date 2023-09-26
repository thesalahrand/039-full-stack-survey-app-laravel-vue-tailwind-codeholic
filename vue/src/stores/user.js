import { ref } from 'vue'
import { defineStore } from 'pinia'
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
    return new Promise((resolve, reject) => {
      axiosClient
        .post('/logout')
        .then(({ data }) => resolve(data))
        .catch((error) => reject(error.response.data.errors))
    })
  }

  const storeUser = (_user) => {
    user.value = _user
    sessionStorage.setItem('user', JSON.stringify(_user))
  }

  const removeUser = () => {
    user.value = {}
    sessionStorage.removeItem('user')
  }

  return { user, register, login, logout, storeUser, removeUser }
})
