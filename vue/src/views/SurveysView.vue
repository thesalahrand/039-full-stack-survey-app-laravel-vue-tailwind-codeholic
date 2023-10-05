<script setup>
import PageComponent from '../components/PageComponent.vue'
import IconPlus from '../components/icons/IconPlus.vue'
import { useSurveysStore } from '../stores/surveys'
import IconPencil from '../components/icons/IconPencil.vue'
import IconTrash from '../components/icons/IconTrash.vue'

const surveysStore = useSurveysStore()
</script>

<template>
  <page-component>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h4 class="text-xl font-semibold dark:text-white">Surveys</h4>
        <router-link
          :to="{ name: 'survey-create' }"
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <icon-plus classes="w-3.5 h-3.5 text-white" stroke-width="3.5" />
          <span class="ml-2">Add new survey</span>
        </router-link>
      </div>
    </template>
    <div class="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(survey, idx) in surveysStore.surveys"
        :key="idx"
        class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img class="rounded-t-lg" :src="survey.image" :alt="survey.title" />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {{ survey.title }}
            </h5>
          </a>
          <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
            {{ survey.description }}
          </p>
          <div class="flex gap-x-2 items-center">
            <router-link
              :to="{ name: 'survey-view', params: { id: survey.id } }"
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <icon-pencil classes="w-3.5 h-3.5 text-white" />
              <span class="ml-2">Edit</span>
            </router-link>
            <router-link
              :to="{ name: 'survey-view', params: { id: survey.id } }"
              type="button"
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <icon-trash classes="w-3.5 h-3.5 text-white" />
              <span class="ml-2">Delete</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </page-component>
</template>

<style scoped></style>
