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
  <nav
    class="flex items-center justify-between py-2 border-b border-indigo-950 bg-old-neutral-900 w-full px-4 md:px-4 lg:px-8"
  >
    <div class="flex items-center space-x-1 pl-30">
      <img src="https://streamer.bot/twitchspeaker/logo.svg" class="w-6 h-6" />
      <span class="text-xl font-thin text-#D4D4D4">Speaker.bot</span>
      <UDropdownMenu :items="items">
        <UButton
          label="Documentation"
          variant="link"
          class="text-amber-50 hover:text-secondary text-md"
          trailing-icon="i-heroicons-chevron-down"
        />
      </UDropdownMenu>
    </div>

    <div class="hidden md:block">
      <UNavigationMenu :items="navigationItems" orientation="horizontal" variant="link" />
    </div>

    <div class="flex items-center space-x-4 pr-30">
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
  </nav>
</template>
