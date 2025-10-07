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
      { text: "Home", link: "/" },
      { text: "About Me", link: "/about-me/index" },
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
        text: "About Me",
        items: [{ text: "About Me", link: "/about-me/" }],
      },
      {
        text: "Spiritual Personality",
        items: [
          { text: "Spiritual Personality", link: "/spiritual-personality/" },
        ],
      },
      {
        text: "Better Than Before",
        items: [{ text: "Better Than Before", link: "/better-than-before/" }],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/DeafProgrammer/DeafProgrammer.github.io",
      },
    ],
  },
  base: "/",
});
