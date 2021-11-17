<template>
  <div class="h-full w-full top-0 left-0 overflow-hidden absolute">
    <div ref="snowsEl" class="h-full w-full inline-block"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const snowsEl = ref('')
onMounted(() => {
  setInterval(function createSnows() {
    let snow = document.createElement('div'),
      snowSize = Math.random() * 5 + 5 + 'px' // 5-10 size

    snow.classList.add('snow-icon')
    snow.style.width = snowSize
    snow.style.height = snowSize
    snow.style.left = Math.random() * window.innerWidth + 'px' // 0-視窗大小間
    snow.style.opacity = Math.random() // 0-1
    snow.style.animationDuration = Math.random() * 3 + 2 + 's' // 2-5s
    snowsEl.value.appendChild(snow)
    setTimeout(() => {
      snow.remove()
    }, 5000)
  }, 50)
})
</script>
