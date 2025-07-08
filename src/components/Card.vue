<script setup>
defineProps({
  imgSrc: {
    type: String,
    default: 'https://streamer.bot/twitchspeaker/logo.svg',
  },
  title: {
    type: String,
    default: 'Google Cloud',
  },
  description: {
    type: String,
    default:
      'Convert text into natural-sounding speech using an API powered by the best of Google’s AI technologies.',
  },
})
</script>
<template>
  <UCard class="items-start justify-center m-5 bg-old-neutral-900 border border-old-neutral-900">
    <img :src="imgSrc" class="w-16 h-16" />

    <h2 class="font-bold">{{ title }}</h2>

    <p class="text-old-neutral-400">
      {{ description }}
    </p>
  </UCard>
</template>
