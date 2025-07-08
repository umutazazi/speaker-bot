<script setup></script>
<template>
  <div class="flex bg-radial from-cyan-950 via-old-neutral-900 to-old-neutral-900 h-screen">
    <div class="flex flex-col flex-1 items-start justify-center space-y-9 ml-50 mb-10">
      <UButton
        label="Check out the latest updates to Speaker.bot "
        class="text-#888B8D font-light bg-old-neutral-800 hover:bg-gray-600 rounded-2xl border-1 border-gray-700 py-0.5 px-1"
        trailing-icon="i-heroicons-arrow-right"
      />
      <h1 class="text-7xl font-bold">Speaker.bot</h1>
      <p class="font-medium text-md">Supercharged Text to Speech (TTS) for your live stream!</p>
      <UButton
        label="Get Started"
        class="bg-secondary hover:bg-secondary-500 text-black px-6 py-2"
        to="/get-started"
        icon="i-heroicons-rocket-launch"
      />
    </div>
    <img class="flex-1 size-90 mt-40 mr-70" src="https://streamer.bot/twitchspeaker/logo.svg" />
  </div>
</template>
