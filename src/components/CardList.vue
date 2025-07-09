<script setup>
import Card from '@/components/Card.vue'
</script>
<template>
  <div class="py-24 sm:py-32 cz-color-15066597">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col cz-color-15066597"
    >
      <div class="text-center flex flex-col items-center cz-color-15066597">
        <h2
          class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl cz-color-16777215 cz-color-15066597"
        >
          Supported Speech Engines
        </h2>
        <p
          class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300 cz-color-13948116 cz-color-15066597"
        >
          Use your favorite TTS engine with Speaker.bot
        </p>
      </div>
      <div class="flex flex-col lg:grid gap-8 lg:grid-cols-12 relative cz-color-15066597">
        <Card
          title="Google Cloud"
          description="Convert text into natural-sounding speech using an API powered by the best of Google’s AI technologies."
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="
      Azure"
          description="Engage global audiences by using 400 neural voices across 140 languages and variants available with Azure TTS"
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="Amazon Polly"
          description="Convert text into natural-sounding speech using an API powered by the best of Google’s AI technologies."
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="
      Watson"
          description="Engage global audiences by using 400 neural voices across 140 languages and variants available with Azure TTS"
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="Google Cloud"
          description="Convert text into natural-sounding speech using an API powered by the best of Google’s AI technologies."
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="
      Azure"
          description="Engage global audiences by using 400 neural voices across 140 languages and variants available with Azure TTS"
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="UberDuck"
          description="Convert text into natural-sounding speech using an API powered by the best of Google’s AI technologies."
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
        <Card
          title="
      SAPI5"
          description="Engage global audiences by using 400 neural voices across 140 languages and variants available with Azure TTS"
          imgSrc="https://streamer.bot/twitchspeaker/logo.svg"
        />
      </div>
    </div>
  </div>
</template>
