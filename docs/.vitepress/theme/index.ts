// For customizing theme, make sure you install vue as a dependency
// Refer to: https://vitepress.dev/guide/custom-theme
// Refer to: https://vitepress.dev/guide/extending-default-theme#layout-slots

// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
// import Layout from './layouts/default.vue'

import 'uno.css'

// import { h } from 'vue'
// import Theme from 'vitepress/theme'
import Layout from '@/layouts/default.vue'
import '@/assets/css/tailwind.css'

export default {
  // extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
