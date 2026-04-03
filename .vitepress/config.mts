import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/FuriLens-doc/',
  vite: {
    publicDir: '.vitepress/public'
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "FuriLens User Guide v1.4.0",
      description: "an intelligent Japanese reading assistant designed to make reading smoother and more efficient.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Introduction', link: '/introduction/intro' }
        ],
        sidebar: {
          '/introduction/': [
            {
              text: 'Introduction',
              items: [
                { text: 'Getting Started', link: '/introduction/intro' }
              ]
            }
          ]
        }
      }
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: "FuriLens 使用指南 v1.4.0",
      description: "一款智慧型日文閱讀輔助工具，讓閱讀更流暢、更有效率。",
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-tw/' },
          { text: '介紹', link: '/zh-tw/introduction/intro' }
        ],
        sidebar: {
          '/zh-tw/introduction/': [
            {
              text: '介紹',
              items: [
                { text: '開始使用', link: '/zh-tw/introduction/intro' }
              ]
            }
          ]
        }
      }
    }
  },
  themeConfig: {
    logo: '/furilens_icon.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
