<template>
  <christmas-card-snow-bg />
  <christmas-card-start-page @handleisOpenCard="getisOpenCard" />
  <christmas-card-main-page :is-open-card="isOpenCard" />

  <!-- 按鈕：返回與白/黑天切換 -->
  <button class="top-5 right-16 z-100 button-none absolute hover:(opacity-50)" @click.prevent="isOpenCard = false">
    <Icon-mdi-restore class="text-light-icon text-26px inline-block dark:(text-gray-200)" />
  </button>
  <button class="top-4 right-4 z-100 button-none absolute hover:(opacity-50)" @click.prevent="handleIsNight()">
    <Icon-ph-sun v-show="isNight" class="text-30px text-gray-200 inline-block" />
    <Icon-ph-moon-stars v-show="!isNight" class="text-light-icon text-30px inline-block" />
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
