<script setup>
defineProps(['title'])
</script>

<template>
  <div>
    <h4 class="text-xl font-semibold dark:text-white mb-6">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<style scoped></style>
