const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/userstech/'
  }
} : {}
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: true,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'UsersTech',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'UsersTechは、有する資源を活用して、お客様のシステム開発の効率化、ソフトウェア品質の向上、そのシステムの利用者の満足度向上を目的とする技術、労働力の提供を致します。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  routerBase,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  generate: {
    dir: 'docs'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/slick-carousel', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  target: 'static',
  ssr: true,
  watchers: {
    webpack: {
      poll: true
    }
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/vuetify'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    caches: true,
    parallel: true,
  },
  googleAnalytics: {
    id: 'UA-221723109-1'
  }
}
