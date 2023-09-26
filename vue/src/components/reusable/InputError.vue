<script setup>
defineProps(['errors'])
</script>

<template>
  <div v-if="errors">
    <p
      v-for="(error, idx) in errors"
      :key="idx"
      class="mt-2 text-sm text-red-600 dark:text-red-500"
    >
      {{ error }}
    </p>
  </div>
</template>

<style scoped></style>
