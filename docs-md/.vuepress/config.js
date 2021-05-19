module.exports = {
  title: 'VuePress Starter',
  description: 'Só brincando',
  base: '/vuepress-starter/',

  locales: {
    '/': {
      lang: 'pt-BR',
    },
  },

  themeConfig: {
    smoothScroll: true,
    locales: {
      '/': {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Google', link: 'https://google.com' },
        ],

        sidebar: [
          '/debug/',
          '/guide/js/',
        ]
      },
    },
  }
}
