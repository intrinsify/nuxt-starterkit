// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/eslint",
    "@nuxt/ui"
  ],
  eslint: {
    config: {
      stylistic: true
      }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})