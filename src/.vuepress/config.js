const { description } = require("../../package");

module.exports = {
  base: "/taaminkom-docs/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Tamincom Docs",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#92c01f" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: true,
          children: [""],
        },
        {
          title: "Insurance Steps",
          collapsable: true,
          children: ["steps/", "steps/step1", "steps/step2", "steps/step3", "steps/step4"],
        },
        {
          title: "User pages",
          collapsable: true,
          children: ["account/"],
        },
        {
          title: "Site Pages",
          collapsable: true,
          children: ["pages/", "pages/about"],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
