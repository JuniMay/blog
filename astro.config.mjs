import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://JuniMay.github.io',
	base: '/blog',
	integrations: [mdx({extendPlugins: false}), sitemap()],
    markdown: {
        remarkPlugins: [
            remarkMath,
        ],
        rehypePlugins: [
            [rehypeKatex, {
            // Katex plugin options
            }]
        ],
		extendDefaultPlugins: true
    }
});
