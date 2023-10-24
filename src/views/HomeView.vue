<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: start;
}
</style>