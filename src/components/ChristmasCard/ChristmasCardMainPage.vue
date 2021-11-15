<template>
  <div pos="relative" bg="light-bg dark:(dark-bg)" border="rounded-md" h="0" w="full" p="b-[70.83%]" overflow="hidden">
    <div pos="absolute" h="full" w="full">
      <div pos="relative" h="full" w="full">
        <div
          bg="bottom tree-img no-repeat contain"
          pos="absolute bottom-0"
          h="full"
          w="full"
          opacity="40 dark:(20)"
          :class="{ 'animate-animated animate-slow animate-slideInUp animate-delay-1s': props.isOpenCard }"
        ></div>

        <div bg="top title-light-img no-repeat contain" pos="absolute top-0" w="full" h="full" opacity="40"></div>

        <div
          pos="absolute -bottom-1 -right-1"
          w="full"
          :class="{ 'animate-animated animate-fast animate-fadeInUp animate-delay': props.isOpenCard }"
        >
          <img src="../../assets/images/right-snow.png" alt="右邊雪地" />
        </div>

        <div
          pos="absolute -bottom-1 -left-1"
          w="1/2"
          :class="{ 'animate-animated animate-fast animate-fadeInUp animate-delay': props.isOpenCard }"
        >
          <img src="../../assets/images/left-snow.png" alt="左邊雪地" />
        </div>

        <div
          pos="absolute bottom-10 right-18"
          w="2/5"
          :class="{ 'animate-animated animate-fast animate-zoomIn animate-delay-2s': props.isOpenCard }"
        >
          <div pos="relative" w="full" h="0" p="b-49/50" overflow="hidden">
            <div bg="santa-svg no-repeat contain" w="full" h="full" pos="absolute top-0 left-0"></div>
          </div>
        </div>

        <div
          pos="absolute bottom-1/10 left-3/10"
          w="1/4"
          :class="{ 'animate-animated animate-fast animate-zoomIn animate-delay-2s': props.isOpenCard }"
        >
          <img src="../../assets/images/elk.png" alt="麋鹿" />
        </div>

        <div
          pos="absolute top-2/25 left-1/10"
          w="1/2"
          :class="{ 'animate-animated animate-fast animate-zoomIn animate-delay-3s': props.isOpenCard }"
        >
          <img
            filter="~ drop-shadow-blue75 dark:(drop-shadow-blue25)"
            src="../../assets/images/merry-christmas-title2.png"
            alt="merry christmas 標題"
          />
        </div>

        <div
          pos="absolute top-1/10 left-1/25"
          w="1/2"
          :class="{ 'animate-animated animate-slower animate-fadeIn animate-delay-3s': props.isOpenCard }"
        >
          <div pos="relative" w="full" h="0" p="b-2/5" overflow="hidden">
            <Icon-fontisto-snowflake-8
              pos="absolute top-0 left-4/25"
              w="2/25"
              h="1/5"
              text="white"
              animate="spin-slow"
            />
            <Icon-fontisto-snowflake-8
              pos="absolute bottom-0 left-0"
              w="3/25"
              h="3/10"
              text="white"
              animate="spin-slow"
            />
            <Icon-fontisto-snowflake-8 pos="absolute top-0 right-0" w="1/10" h="1/4" text="white" animate="spin-slow" />
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
