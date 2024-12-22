import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "duanlvxin's notebook",
  description: "a notebook site",
  base: '/notebook/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '前端开发', link: '/fe/nodejs' }
    ],

    sidebar: {
      '/fe': [
        {
          text: 'nodejs',
          collapsed: false,
          items: [
            { text: 'nodejs初识', link: '/fe/nodejs/index' },
            { text: '安装与入门', link: '/fe/nodejs/install' },
            { text: '模块', link: '/fe/nodejs/module' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/duanlvxin' }
    ]
  }
})
