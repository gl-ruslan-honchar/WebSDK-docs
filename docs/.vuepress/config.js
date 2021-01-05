const { description } = require('../../package')

module.exports = {
  base: '/WebSDK-docs/',
  title: 'Pixellot WebSDK Docs',
  description: description,

  head: [
    ['link', { rel: 'icon', href: '/sdk-icon-2.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Pixellot/web-sdk',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Documentation',
        link: '/guide/',
      },
      {
        text: 'Demo',
        link: 'https://pixellot-web-sdk-dev-sample.pixellot.tv/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            ['', 'Introduction'],
            ['base-setup', 'Base setup'],
          ]
        },
        {
          title: 'API',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ['api', 'WebSDK Player API'],
            ['plugins', 'WebSDK Plugins'],
          ]
        }
      ],
    },
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
