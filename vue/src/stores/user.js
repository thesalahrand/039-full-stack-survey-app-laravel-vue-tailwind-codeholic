import { ref } from 'vue'
import { defineStore } from 'pinia'
import router from '../router'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: 'Bonnie Green',
    email: 'name@flowbite.com',
    image: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
    token: 123
  })

  const signOut = () => {
    console.log('Signout')
    user.value = {}
    router.push({ name: 'login' })
  }

  return { user, signOut }
})
