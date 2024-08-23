// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/icon",
    "@nuxt/eslint"
  ],
  eslint: {
    config: {
      stylistic: true // <---
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})