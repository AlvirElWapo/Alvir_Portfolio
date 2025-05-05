import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

// import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), sitemap(), tailwind(), 
    icon({
        iconDir: "src/icons",
    })
  ],
    image: {
        service: passthroughImageService(),
    },
    // starlight()]
});
