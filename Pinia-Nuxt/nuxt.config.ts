// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
      head : {
        viewport: 'initial-scale=1',
        meta:[
          {
            name: 'Pina & Nuxt',
            content: 'A Pinia & Nuxt App'
          }
        ],
        link:[
          {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
        ]
      },
      pageTransition:{
        name:'page',
        mode:'out-in'
      }
    },
    modules: [
      '@pinia/nuxt',
      '@nuxtjs/tailwindcss'
    ],
    pinia: {
      autoImports: [
        // automatically imports `defineStore`
        'defineStore', // import { defineStore } from 'pinia'
        ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      ],
    }
})
