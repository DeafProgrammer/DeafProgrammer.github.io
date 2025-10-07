import { defineConfig } from "vitepress";
const urlName = "https://DeafProgrammer.github.io/";
//test
// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  lang: "en-US",
  title: "James Anderson's Spiritual Personality & Makeup",
  description: "Spiritual Personality & Makeup",
  themeConfig: {
    siteTitle: "James Anderson",
    nav: [
      { text: "Home", link: "/" },

      {
        text: "Spiritual Personality",
        link: "/spiritual-personality/index",
      },
      {
        text: "Better Than Before",
        link: "/better-than-before/index",
      },
    ],
    sidebar: [
      {
        items: [
          { text: "Spiritual Personality", link: "/spiritual-personality/" },
        ],
      },
      {
        items: [{ text: "Better Than Before", link: "/better-than-before/" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/DeafProgrammer/DeafProgrammer.github.io",
      },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present James Anderson",
    },
  },
  base: "/",
});
