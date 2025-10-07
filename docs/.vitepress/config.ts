import { defineConfig } from "vitepress";
const urlName = "https://DeafProgrammer.github.io/";

// https://vitepress.vuejs.org/config/app-configs
export default {
  title: "James Anderson's Spiritual Personality & Makeup",
  description: "Spiritual Personality & Makeup",
  themeConfig: {
    siteTitle: "James Anderson",
    nav: [
      { text: "About Me", link: "/about-me", activeMatch: "/about-me" },
      {
        text: "Spiritual Personality",
        link: "/spiritual-personality",
        activeMatch: "/about-me",
      },
      { text: "Better Than Before", link: "/better-than-before" },
    ],
    sidebar: {
      "/about-me": [
        {
          text: "About me",
        },
      ],
      "/spiritual-personality": [
        {
          text: "Spiritual Personality",
        },
      ],
      "/better-than-before": [
        {
          text: "Better Than Before",
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
};
