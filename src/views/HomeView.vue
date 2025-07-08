<script setup>
import Hero from '@/components/Hero.vue'
import CardList from '@/components/CardList.vue'
import Footer from '@/components/Footer.vue'
import Tab from '@/components/Tab.vue'
</script>

<template>
  <div class="bg-old-neutral-900">
    <Hero />
    <div class="flex flex-col justify-center items-center space-y-3 py-5 bg-old-neutral-900">
      <h1 class="text-white font-bold text-5xl">Supported Speech Engines</h1>
      <p class="text-gray-200 text-md">Use your favorite TTS engine with Speaker.bot</p>
    </div>
    <CardList />

    <USeparator
      :avatar="{
        src: 'https://github.com/nuxt.png',
      }"
      class="bg-old-neutral-900 pt-15"
    />
    <Footer></Footer>
  </div>
</template>
