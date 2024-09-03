// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  modules: [
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/scripts",
    "@nuxt/ui",
    "@formkit/nuxt",
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  },
  compatibilityDate: '2024-08-26',
  devtools: { enabled: true }
})