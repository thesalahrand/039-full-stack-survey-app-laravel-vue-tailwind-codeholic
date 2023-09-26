<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '../stores/user'
import router from '../router'
import InputError from '../components/reusable/InputError.vue'

const userStore = useUserStore()

const user = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})
const errors = ref({})

const register = async () => {
  try {
    const data = await userStore.register(user)
    sessionStorage.setItem('user', JSON.stringify(data.user))
    userStore.user = data.user
    errors.value = {}
    router.push({ name: 'dashboard' })
  } catch (error) {
    errors.value = error
  }
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="register(user)">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign up to our platform</h5>
    <div>
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your name</label
      >
      <input
        type="text"
        name="name"
        id="name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="ex. Sourav Malo"
        v-model="user.name"
        required
      />
      <input-error :errors="errors.name" />
    </div>
    <div>
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your email</label
      >
      <input
        type="email"
        name="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="ex. sourav.cse5.bu@gmail.com"
        v-model="user.email"
      />
      <input-error :errors="errors.email" />
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Your password</label
      >
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        v-model="user.password"
        required
      />
      <input-error :errors="errors.password" />
    </div>
    <div>
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password Confirmation</label
      >
      <input
        type="password"
        name="password_confirmation"
        id="password_confirmation"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        v-model="user.password_confirmation"
        required
      />
    </div>
    <!-- <div class="flex items-start">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
    </div> -->
    <button
      type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Register
    </button>
    <div class="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
      Already registered?
      <router-link :to="{ name: 'login' }" class="text-blue-700 hover:underline dark:text-blue-500"
        >Login now</router-link
      >
    </div>
  </form>
</template>

<style></style>
