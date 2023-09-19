import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const authUser = ref({
    token: sessionStorage.getItem('TOKEN')
  })

  const register = (userObj) => {
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(userObj)
    })
      .then((res) => res.json())
      .then(({ user }) => {
        sessionStorage.setItem('TOKEN', user.token)
        authUser.value = user
        router.push({ name: 'dashboard' })
      })
      .catch((err) => console.log(err))
  }

  const logout = () => {
    authUser.value = {}
    sessionStorage.removeItem('TOKEN')
    router.push({ name: 'login' })
  }

  return { authUser, register, logout }
})
