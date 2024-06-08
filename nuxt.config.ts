// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
  typescript : {
    shim : false
  },
  devtools: { enabled: true },
  plugins : ['~/plugins/api'],
  nitro : {
    devProxy : {
      '/api' : {
        target : 'http://localhost:3000',
      }
    }
  }
})
