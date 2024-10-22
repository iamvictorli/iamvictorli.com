import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  site: 'https://iamvictorli.com',
  integrations: [
    sitemap(),
    robotsTxt(),
  ],
})
