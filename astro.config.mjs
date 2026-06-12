import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

import icon from 'astro-icon';

// import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  // TODO(Andrés): set this to your real deploy domain.
  site: 'https://alvirportfolio.netlify.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
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
