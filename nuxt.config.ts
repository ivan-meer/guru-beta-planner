// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthub/core'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-10-26'
})