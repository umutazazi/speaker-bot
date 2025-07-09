<script setup>
import Hero from '@/components/Hero.vue'
import CardList from '@/components/CardList.vue'
import Footer from '@/components/Footer.vue'
import Tab from '@/components/Tab.vue'
</script>

<template>
  <main class="min-h-[calc(100vh-var(--header-height))] cz-color-15066597">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl cz-color-15066597">
      <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8 cz-color-15066597">
        <div class="lg:col-span-10 cz-color-15066597">
          <Hero />

          <CardList />

          <div
            class="w-full h-px bg-gray-200 dark:bg-gray-800 flex items-center justify-center cz-color-15066597 cz-color-2500134"
          >
            <div class="bg-white dark:bg-gray-900 px-4 cz-color-15066597 cz-color-1513239"></div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  </main>
</template>
