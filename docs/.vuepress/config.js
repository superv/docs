module.exports = {
  title: 'superV',
  description: 'A platform for Laravel',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Github', link: 'https://github.com/superv/platform' },
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          '/introduction/01-Features',
          '/introduction/02-Terminology',
        ]
      },
      {
        title: 'Getting Started',
        collapsable: true,
        children: [
          ['/getting-started/01-installation', 'Installation'],
          ['/getting-started/02-configuration', 'Configuration'],
        ]
      },
      {
        title: 'Core Concepts',
        collapsable: false,
        children: [
          '/concepts/01-addons',
          '/concepts/02-migrations',
          '/concepts/03-Navigation',
        ]
      },
    ]
  },
  postcss: {
    plugins: [
      require('tailwindcss')('./tailwind.config.js'),
      require('autoprefixer')
    ]
  },
  plugins: [
    [
      '@vuepress/plugin-google-analytics',
      {
        'ga': 'UA-137036636-1'
      }
    ]
  ]
}