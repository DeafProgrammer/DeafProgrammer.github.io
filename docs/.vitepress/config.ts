import { defineConfig } from "vitepress";
const urlName = "https://DeafProgrammer.github.io/";
//test
// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: "James Anderson's Spiritual Personality & Makeup",
  description: "Spiritual Personality & Makeup",
  themeConfig: {
    siteTitle: "James Anderson",
    nav: [
      { text: "About Me", link: "/about-me", activeMatch: "^/about-me" },
      {
        text: "Spiritual Personality",
        link: "/spiritual-personality",
        activeMatch: "^/spiritual-personality",
      },
      {
        text: "Better Than Before",
        link: "/better-than-before",
        activeMatch: "^/better-than-before",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Site Sections",
          items: [
            { text: "About Me", link: "/about-me" },
            { text: "Spiritual Personality", link: "/spiritual-personality" },
            { text: "Better Than Before", link: "/better-than-before" },
          ],
        },
      ],
      "/about-me": [
        {
          text: "About Me",
          items: [{ text: "About Me", link: "/about-me" }],
        },
      ],
      "/spiritual-personality": [
        {
          text: "Spiritual Personality",
          items: [
            { text: "Spiritual Personality", link: "/spiritual-personality" },
          ],
        },
      ],
      "/better-than-before": [
        {
          text: "Better Than Before",
          items: [{ text: "Better Than Before", link: "/better-than-before" }],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/DeafProgrammer/DeafProgrammer.github.io",
      },
    ],
  },
  base: "/",
});
