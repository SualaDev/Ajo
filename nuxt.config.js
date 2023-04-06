import { mapState } from 'vuex'
import axios from 'axios'

export default {
  // generate dynamic links

  generate: {
    // async routes() {
    //       let cityDistArray = []
    //       const routeArray = await axios.get('https://ajo-app.herokuapp.com/api/top-cities') || [];
    //       return routeArray?.data?.data?.map((city) => {
    //         console.log(city.city);
    //         cityDistArray.push('/' + city.city)
    //       })

    //     },
    async routes () {
      const routeArrayRes = await axios.get('https://ajo-app.herokuapp.com/api/top-cities') || []

      const routeArray = routeArrayRes?.data?.data?.map((city) => {
        return {
          route: '/' + city.city
        }
      })

      const placeArrayRes = await axios.get('https://ajo-app.herokuapp.com/api/places/search/popular/') || []
      const placeArray = placeArrayRes?.data?.data?.map((place) => {
        return {
          route: '/explore/' + place.fullSearchResult.place_id
        }
      })

      const routes = routeArray.concat(placeArray)
      return routes
    }
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ajo-interns-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/styles/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist', ssr: false },
    { src: '~/plugins/vue-toasted', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  styleResources: {
    scss: ['~/assets/styles/mixins.scss']
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Nuxt Auth v5
    // '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    // Nuxt Fontawesome
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308

    baseURL: 'https://ajo-app.herokuapp.com/api/'
  },
  // Authentication Strategies

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Transitions

  pageTransition: 'page'
}
