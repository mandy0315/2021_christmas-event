<template>
  <div class="card-container relative" :class="[isNight ? 'dark' : 'light']">
    <christmas-card @handleDayClick="handleDay" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const isNight = ref(false)

const handleDay = (val) => {
  isNight.value = val
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
