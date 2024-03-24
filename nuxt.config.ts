// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, 
  components: true,
  devtools: { enabled: false },
 
  modules:[
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt"

  ],
})
