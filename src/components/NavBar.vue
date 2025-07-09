<script setup>
import { ref } from 'vue'

const searchQuery = ref('')

const navigationItems = [
  {
    label: 'Get Started',
    to: '/get-started',
  },
  {
    label: 'Guide',
    to: '/guide',
  },
  {
    label: 'API',
    type: 'trigger',
    children: [
      { label: 'Reference', to: '/api/reference' },
      { label: 'SDK', to: '/api/sdk' },
      { label: 'Webhooks', to: '/api/webhooks' },
    ],
  },
  {
    label: 'Changelogs',
    to: '/changelogs',
  },
]

const items = [
  {
    label: 'Profile',
    icon: 'i-lucide-user',
  },
  {
    label: 'Billing',
    icon: 'i-lucide-credit-card',
  },
  {
    label: 'Settings',
    icon: 'i-lucide-cog',
  },
]
</script>

<template>
  <header
    class="bg-background/75 backdrop-blur border-b -mb-px sticky top-0 z-50 border-primary-200/75 dark:border-primary-900/50 cz-color-15066597 cz-color-1513239 cz-color-9058846"
  >
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height] cz-color-15066597"
    >
      <div class="lg:flex-1 flex items-center gap-1.5 cz-color-15066597">
        <img src="https://streamer.bot/twitchspeaker/logo.svg" class="w-6 h-6" />
        <span
          class="font-light text-xl text-neutral-900 dark:text-neutral-300 ml-1 cz-color-13948116 cz-color-15066597"
          >Speaker.bot</span
        >
        <UDropdownMenu :items="items">
          <UButton
            label="Documentation"
            variant="link"
            class="text-amber-50 hover:text-secondary text-md"
            trailing-icon="i-heroicons-chevron-down"
          />
        </UDropdownMenu>
      </div>

      <ul class="items-center gap-x-8 hidden lg:flex cz-color-15066597">
        <UNavigationMenu :items="navigationItems" orientation="horizontal" variant="link" />
      </ul>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5 cz-color-15066597">
        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass"
          class="w-80 hidden lg:block"
          color="gray"
          variant="outline"
        >
          <template #trailing>
            <UKbd>Ctrl</UKbd>
            <UKbd>K</UKbd>
          </template>
        </UInput>

        <UButton icon="i-heroicons-moon" variant="ghost" color="gray" square />
        <UButton icon="i-heroicons-bars-3" variant="ghost" color="white" class="md:hidden" square />
      </div>
    </div>
  </header>
</template>
