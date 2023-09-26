<script setup>
import { ref, reactive } from 'vue'
import { useUserStore } from '../stores/user'
import router from '../router'
import InputError from '../components/reusable/InputError.vue'
import IconX from '../components/icons/IconX.vue'

const userStore = useUserStore()

const user = reactive({
  email: '',
  password: '',
  remember: false
})
const errors = ref({})

const login = async () => {
  try {
    const data = await userStore.login(user)
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
  <form class="space-y-6" @submit.prevent="login()">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
    <div
      class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
      role="alert"
      v-if="errors.generic"
    >
      <span class="sr-only">Info</span>
      <div class="text-sm font-medium">
        {{ errors.generic[0] }}
      </div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
        aria-label="Close"
        @click="errors = {}"
      >
        <span class="sr-only">Close</span>
        <icon-x />
      </button>
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
        placeholder="name@company.com"
        required
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
        required
        v-model="user.password"
      />
      <input-error :errors="errors.password" />
    </div>
    <div class="flex items-start">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            v-model="user.remember"
          />
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Remember me</label
        >
      </div>
      <!-- <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
        >Lost Password?</a
      > -->
    </div>
    <button
      type="submit"
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login to your account
    </button>
    <div class="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
      Not registered?
      <router-link
        :to="{ name: 'register' }"
        class="text-blue-700 hover:underline dark:text-blue-500"
        >Create account now</router-link
      >
    </div>
  </form>
</template>

<style></style>
