<script setup>
defineProps(['title'])
</script>

<template>
  <div>
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<style scoped></style>
