import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  integrations: [UnoCSS({
    injectReset: true
  }), solidJs()]
});