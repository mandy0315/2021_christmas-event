<template>
  <div
    class="
      bg-light-bg
      rounded-md
      flex
      h-full
      w-full
      top-0
      left-0
      z-50
      justify-center
      items-center
      absolute
      dark:(bg-dark-bg)
    "
    :class="{ 'animate-animated animate-fast animate-fadeOut': isOpenCard }"
  >
    <div class="w-2/5 relative" @mouseleave="isHoverLetter = false">
      <div>
        <img
          v-show="!isHoverLetter"
          class="m-auto"
          src="../../assets/images/letter-start-1.png"
          alt="merry christmas-letter1"
        />
        <img
          v-show="isHoverLetter"
          class="m-auto"
          src="../../assets/images/letter-start-2.png"
          alt="merry christmas-letter1"
        />
      </div>
      <button
        class="
          bg-light-bg
          font-bold
          rounded-3xl
          text-white text-md
          ml-[-50px]
          py-0.5
          bottom-3/20
          w-[100px]
          button-none
          inline-block
          absolute
          !border-white !border-solid !border-2
          dark:(bg-dark-bg)
        "
        :class="{ 'bg-hex-f6c356': isHoverLetter }"
        @click.prevent="handleisOpenCard()"
        @mouseenter="isHoverLetter = true"
      >
        START
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const isHoverLetter = ref(false),
  isOpenCard = ref(false),
  emit = defineEmits(['handleisOpenCard'])

const handleisOpenCard = () => {
  isOpenCard.value = true
  emit('handleisOpenCard', isOpenCard.value)
}
</script>
