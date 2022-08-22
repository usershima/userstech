export default {
  target: 'static',
  ssr: true,
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //router: {
  //  base: '/userstech/'
  //},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],
  //generate: {
  //  dir: 'docs'
  //},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

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
  modules: ['@nuxtjs/axios'],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    caches: true,
    parallel: true,
  }
}
