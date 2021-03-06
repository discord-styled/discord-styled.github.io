const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'interactions-styled',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
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
    logo: '/images/logo_blurple.png',
    logoDark: '/images/logo.png',
    repo: 'https://github.com/discord-styled/discord-styled.github.io',
    editLink: true,
    docsDir: 'docs',
    repoLabel: 'Docs Repository',
    lastUpdated: true,
    editLinkText: 'Edit this page on GitHub',
    contributors: false,
    navbar: [
      { text: 'Documentation', link: '/latest/', children: [
        { text: 'Guide', link: '/latest/', activeMatch: '^/api/', },
        { text: 'API Reference', link: '/latest/api/' }
      ] },
      { text: 'GitHub', link: 'https://github.com/discord-styled/discord-interactions-styled' }
    ],
    sidebar: {
      '/latest/': [
        { text: 'Documentation', collapsable: false, children: [
          '/latest/README.md',
          '/latest/getting-started.md',
          '/latest/options.md',
          '/latest/option-templates.md',
          '/latest/permissions.md',
          '/latest/permission-templates.md',
          '/latest/buttons.md',
          '/latest/selects.md',
          '/faq.md'
        ] },
      ],
      '/latest/api/': [
        { text: 'API Reference', children: [
          '/latest/api/README.md',
          '/latest/api/slash.md',
          '/latest/api/permissions.md',
          '/latest/api/buttons.md',
          { link: '/latest/api/utils/README.md', text: 'discord_styled.utils' }
        ] }
      ],
      '/latest/api/utils/': [
        { text: 'API Reference', children: [
          { link: '/latest/api/README.md', text: 'Back' },
          '/latest/api/utils/README.md',
          '/latest/api/utils/permissions.md',
          '/latest/api/utils/options.md'
        ] }
      ]
    }
  }
}
