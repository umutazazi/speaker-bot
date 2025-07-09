<script setup></script>
<template>
  <div class="py-24 sm:py-32 md:py-40 relative cz-color-15066597">
    <div
      class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 grid lg:grid-cols-2 lg:items-center cz-color-15066597"
    >
      <div>
        <div class="mb-10 cz-color-15066597">
          <a
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-xs gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center rounded-full cz-color-15066597 cz-color-2500134"
          >
            <span class="cz-color-15066597">Check out the latest updates to Speaker.bot </span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="i-heroicons-arrow-right flex-shrink-0 h-4 w-4 cz-color-15066597"
            ></UIcon>
          </a>
        </div>

        <h1
          class="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl cz-color-16777215 cz-color-15066597"
        >
          Speaker.bot
        </h1>
        <p
          class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300 cz-color-13948116 cz-color-15066597"
        >
          Supercharged Text to Speech (TTS) for your live stream!
        </p>

        <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 cz-color-15066597">
          <UButton
            label="Get Started"
            to="/get-started"
            icon="i-heroicons-rocket-launch"
            class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center cz-color-1513239 cz-color-16426336 cz-color-15066597"
          />
        </div>
      </div>
      <img width="350" src="https://streamer.bot/twitchspeaker/logo.svg" />
    </div>
  </div>
</template>
