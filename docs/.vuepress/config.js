module.exports = {
  title: 'VuePress Starter',
  description: 'Just playing around',
  base: '/',
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Google', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/debug/'
    ]
  }
}
