// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app:{
        head: {
            title: 'Nuxt Dojo',
            meta:[
                {name: 'descripion', content: 'Everything about Nuxt.js'}
            ],
            link:[
                {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}

            ]
        },
        pageTransition: { name: 'page', mode: 'out-in'}
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
        public: {
            
        }
    }
})
