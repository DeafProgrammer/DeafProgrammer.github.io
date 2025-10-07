import { defineConfig } from "vitepress";

// https://vitepress.vuejs.org/config/app-configs
export default {
  title: "DeafProgrammer",
  themeConfig: {
    nav: [
      { text: "About Me", link: "/about-me" },
      { text: "Spiritual Personality", link: "/spiritual-personality" },
      { text: "Better Than Before", link: "/better-than-before" },
    ],
  },
  base: "/",
};
