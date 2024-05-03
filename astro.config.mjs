import { defineConfig } from 'astro/config';

import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [sanity({
    projectId: "vdeubfww",
    dataset: "production",
    // Set useCdn to false if you're building statically.
    useCdn: false,
  }), react()]
});