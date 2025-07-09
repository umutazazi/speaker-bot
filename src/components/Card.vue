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
  <div
    class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow col-span-4 cz-color-15066597"
  >
    <div
      class="overflow-hidden flex-1 flex flex-col rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity] cz-color-15066597 cz-color-1513239"
    >
      <div
        class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6 cz-color-15066597"
      >
        <div class="cz-color-15066597">
          <div class="mb-2 pointer-events-none cz-color-15066597">
            <UIcon
              name="i-logos-google-cloud"
              class="w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white cz-color-16777215 cz-color-15066597"
            />
          </div>
          <p
            class="text-gray-900 dark:text-white text-base font-bold truncate cz-color-16777215 cz-color-15066597"
          >
            {{ title }}
          </p>
          <p
            class="text-[15px] text-gray-500 dark:text-gray-400 mt-1 cz-color-10724259 cz-color-15066597"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
