<script setup>
import AboutMe from '@/components/AboutMe.vue'
</script>

<template>
  <section id='about' class="about">
    <AboutMe />
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    margin-top: 50px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>