import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import metaTags from "astro-meta-tags";

export default defineConfig({
	site: "https://kit.elian.codes",
	integrations: [
		UnoCSS({
			injectReset: true,
		}),
		solidJs(),
		sitemap(),
		metaTags(),
	],
});
