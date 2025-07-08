<script setup>
import { RouterView } from 'vue-router'

import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <UApp class="bg-background">
    <NavBar />
    <RouterView />
  </UApp>
</template>
