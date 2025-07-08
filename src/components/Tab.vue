<script setup>
import { ref } from 'vue'

const activeTab = ref('Issues')

const tabs = [
  {
    id: 'dashboards',
    label: 'Dashboards',
    active: false,
  },
  {
    id: 'testing',
    label: 'Testing',
    active: false,
  },
  {
    id: 'roadmaps',
    label: 'Roadmaps',
    active: false,
  },
  {
    id: 'timesheet',
    label: 'Timesheet',
    active: false,
  },
  {
    id: 'docs',
    label: 'Docs',
    active: false,
  },
  {
    id: 'issues',
    label: 'Issues',
    active: false,
  },
]

const setActiveTab = (tabId) => {
  activeTab.value = tabId
}
</script>

<template>
  <div class="w-full bg-background">
    <!-- Tab Navigation -->
    <div class="flex space-x-1 p-4 gap-5 justify-center">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="setActiveTab(tab.id)"
        :class="[
          'px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 border-secondary border-2  ',
          activeTab === tab.id || tab.active
            ? 'bg-old-neutral-700 text-white  '
            : 'bg-old-neutral-700 opacity-50 text-white hover:text-white hover:opacity-100 ',
        ]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Tab Content -->
    <div class="flex justify-center p-6">
      <div
        class="w-[1000px] h-[500px] bg-old-neutral-800/30 border-10 border-secondary-500/30 rounded-xl p-8"
      >
        <div v-if="activeTab === 'dashboards' || tabs[0].active" class="text-textPrimary">
          <h2 class="text-xl font-semibold mb-4 text-textSecondary">Dashboards</h2>
          <p class="text-gray-300">Dashboard content goes here...</p>
        </div>

        <div v-if="activeTab === 'testing'" class="text-textPrimary">
          <h2 class="text-xl font-semibold mb-4 text-textSecondary">Testing</h2>
          <p class="text-gray-300">Testing content goes here...</p>
        </div>

        <div v-if="activeTab === 'roadmaps'" class="text-textPrimary">
          <h2 class="text-xl font-semibold mb-4 text-textSecondary">Roadmaps</h2>
          <p class="text-gray-300">Roadmaps content goes here...</p>
        </div>

        <div v-if="activeTab === 'timesheet'" class="text-textPrimary">
          <h2 class="text-xl font-semibold mb-4 text-textSecondary">Timesheet</h2>
          <p class="text-gray-300">Timesheet content goes here...</p>
        </div>

        <div v-if="activeTab === 'docs'" class="text-textPrimary">
          <h2 class="text-xl font-semibold mb-4 text-textSecondary">Docs</h2>
          <p class="text-gray-300">Documentation content goes here...</p>
        </div>

        <div v-if="activeTab === 'issues' || tabs[5].active" class="text-textPrimary">
          <h2 class="text-xl font-semibold mb-4 text-textSecondary">My Issues</h2>
          <div class="space-y-4">
            <div class="bg-gray-800 rounded-lg p-4 border border-gray-600">
              <h3 class="font-medium mb-2">Issue Management</h3>
              <p class="text-gray-300 text-sm">Track and manage your project issues here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ek stil düzenlemeleri gerekirse buraya eklenebilir */
</style>
