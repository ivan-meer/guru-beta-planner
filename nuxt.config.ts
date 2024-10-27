// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthub/core'],
  hub: {
    database: true
  },
  routeRules: {
    '/': { prerender: true }
  },
  compatibilityDate: '2024-10-26'
})
