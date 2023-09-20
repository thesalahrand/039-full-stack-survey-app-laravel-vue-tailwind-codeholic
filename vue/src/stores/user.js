import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const user = ref(JSON.parse(sessionStorage.getItem('user')) || {})

  const register = (_user) => {
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(_user)
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          sessionStorage.setItem('user', JSON.stringify(data.user))
          user.value = data.user
          router.push({ name: 'dashboard' })
        }
      })
      .catch((err) => console.log(err))
  }

  const login = (_user) => {
    fetch('http://127.0.0.1:8000/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(_user)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (!data.errors) {
          sessionStorage.setItem('user', JSON.stringify(data.user))
          user.value = data.user
          router.push({ name: 'dashboard' })
        }
      })
      .catch((err) => console.log(err))
  }

  const logout = () => {
    user.value = {}
    sessionStorage.removeItem('user')
    router.push({ name: 'login' })
  }

  return { user, register, login, logout }
})
