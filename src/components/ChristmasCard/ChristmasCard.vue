<template>
  <christmas-card-snow-bg />
  <christmas-card-start-page @handleisOpenCard="getisOpenCard" />
  <christmas-card-main-page :is-open-card="isOpenCard" />

  <!-- 按鈕：返回與白/黑天切換 -->
  <button
    class="button-none"
    pos="absolute top-5 right-16"
    z="100"
    opacity="hover:(50)"
    @click.prevent="isOpenCard = false"
  >
    <Icon-mdi-restore text="light-icon [26px] dark:(gray-200)" display="inline-block" />
  </button>
  <button
    class="button-none"
    pos="absolute top-4 right-4"
    z="100"
    opacity="hover:(50)"
    @click.prevent="handleIsNight()"
  >
    <Icon-ph-sun v-show="isNight" text="[30px] gray-200" display="inline-block" />
    <Icon-ph-moon-stars v-show="!isNight" text="light-icon [30px]" display="inline-block" />
  </button>
</template>
<script setup>
import { ref } from 'vue'
const isNight = ref(false),
  isOpenCard = ref(false),
  emit = defineEmits(['handleIsNight'])

const handleIsNight = () => {
  isNight.value = !isNight.value === true
  emit('handleIsNight', isNight.value)
}
const getisOpenCard = (val) => (isOpenCard.value = val)
</script>
