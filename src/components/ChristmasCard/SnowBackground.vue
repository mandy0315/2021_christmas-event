<template>
  <div class="h-full w-full top-0 left-0 overflow-hidden absolute">
    <div ref="snowsEl" class="h-full w-full inline-block"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const snowsEl = ref(null)
onMounted(() => {
  setInterval(function createSnows() {
    let snow = document.createElement('div'),
      snowSize = Math.random() * 5 + 5 + 'px' // 5-10s

    snow.classList.add('snow-icon')
    snow.style.width = snowSize
    snow.style.height = snowSize
    snow.style.left = Math.random() * window.innerWidth + 'px'
    snow.style.opacity = Math.random()
    snow.style.animationDuration = Math.random() * 3 + 2 + 's' // 2-5s
    snowsEl.value.appendChild(snow)

    setTimeout(() => {
      snow.remove()
    }, 5000)
  }, 50)
})
</script>
<style>
.snow-icon {
  @apply bg-white rounded-1/2 top-0 animate-snow-an z-60 absolute;
}
</style>
