<template>
  <div class="bg-light-bg rounded-md h-0 w-full pb-[70.83%] overflow-hidden relative dark:(bg-dark-bg)">
    <div class="h-full w-full absolute">
      <div class="h-full w-full relative">
        <div
          class="
            bg-tree-img bg-bottom bg-no-repeat bg-contain
            h-full
            w-full
            opacity-40
            bottom-0
            absolute
            dark:(opacity-20)
          "
          :class="{ 'animate-animated animate-slow animate-slideInUp animate-delay-1s': props.isOpenCard }"
        ></div>

        <div class="bg-title-light-img bg-top bg-no-repeat bg-contain h-full w-full opacity-40 top-0 absolute"></div>

        <div
          class="w-full -right-1 -bottom-1 absolute"
          :class="{ 'animate-animated animate-fast animate-fadeInUp animate-delay': props.isOpenCard }"
        >
          <img src="../../assets/images/right-snow.png" alt="右邊雪地" />
        </div>

        <div
          class="-bottom-1 -left-1 w-1/2 absolute"
          :class="{ 'animate-animated animate-fast animate-fadeInUp animate-delay': props.isOpenCard }"
        >
          <img src="../../assets/images/left-snow.png" alt="左邊雪地" />
        </div>

        <div
          class="right-18 bottom-10 w-2/5 absolute"
          :class="{ 'animate-animated animate-fast animate-zoomIn animate-delay-2s': props.isOpenCard }"
        >
          <div class="h-0 w-full pb-49/50 overflow-hidden relative">
            <div class="bg-santa-svg bg-no-repeat bg-contain h-full w-full top-0 left-0 absolute"></div>
          </div>
        </div>

        <div
          class="bottom-1/10 left-3/10 w-1/4 absolute"
          :class="{ 'animate-animated animate-fast animate-zoomIn animate-delay-2s': props.isOpenCard }"
        >
          <img src="../../assets/images/elk.png" alt="麋鹿" />
        </div>

        <div
          class="top-2/25 left-1/10 w-1/2 absolute"
          :class="{ 'animate-animated animate-fast animate-zoomIn animate-delay-3s': props.isOpenCard }"
        >
          <img
            class="filter drop-shadow-blue75 dark:(drop-shadow-blue25)"
            src="../../assets/images/merry-christmas-title2.png"
            alt="merry christmas 標題"
          />
        </div>

        <div
          class="top-1/10 left-1/25 w-1/2 absolute"
          :class="{ 'animate-animated animate-slower animate-fadeIn animate-delay-3s': props.isOpenCard }"
        >
          <div class="h-0 w-full pb-2/5 overflow-hidden relative">
            <Icon-fontisto-snowflake-8 class="h-1/5 text-white top-0 left-4/25 animate-spin-slow w-2/25 absolute" />
            <Icon-fontisto-snowflake-8 class="h-3/10 text-white bottom-0 left-0 animate-spin-slow w-3/25 absolute" />
            <Icon-fontisto-snowflake-8 class="h-1/4 text-white top-0 right-0 animate-spin-slow w-1/10 absolute" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  isOpenCard: { type: Boolean },
})
</script>
