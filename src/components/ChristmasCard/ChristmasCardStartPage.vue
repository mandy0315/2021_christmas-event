<template>
  <div
    bg="light-bg dark:(dark-bg)"
    border="rounded-md"
    pos="absolute top-0 left-0"
    z="50"
    flex="~"
    justify="center"
    align="items-center"
    h="full"
    w="full"
    :class="{ 'animate-animated animate-fast animate-fadeOut': isOpenCard }"
  >
    <div pos="relative" w="2/5" @mouseleave="isHoverLetter = false">
      <div>
        <img
          v-show="!isHoverLetter"
          m="auto"
          src="../../assets/images/letter-start-1.png"
          alt="merry christmas-letter1"
        />
        <img
          v-show="isHoverLetter"
          m="auto"
          src="../../assets/images/letter-start-2.png"
          alt="merry christmas-letter1"
        />
      </div>
      <button
        class="button-none"
        pos="bottom-3/20 absolute"
        display="inline-block"
        bg="light-bg dark:(dark-bg)"
        font="bold"
        text="white md"
        border="rounded-3xl !white !solid !2"
        w="[100px]"
        m="l-[-50px]"
        p="y-0.5"
        :class="{ '!bg-hex-f6c356': isHoverLetter }"
        @click.prevent="isOpenCard = true"
        @mouseenter="isHoverLetter = true"
      >
        START
      </button>
    </div>
  </div>
</template>
<script setup>
import { ref, inject } from 'vue'
const isHoverLetter = ref(false)
const isOpenCard = inject('isOpenCard')
</script>
