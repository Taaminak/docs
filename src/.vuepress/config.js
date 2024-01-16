const { description } = require("../../package");

module.exports = {
  base: "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Rakeez Docs",
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
    ["meta", { name: "theme-color", content: "#418ac9" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    ['link', { rel: "icon", type: "image/svg", href: "/images/logo-small.svg" }],
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
          title: "Auth Models",
          collapsable: true,
          children: [
            "auth/",
            "auth/login",
            "auth/register",
            "auth/reset-password",
          ],
        },
        {
          title: "User pages",
          collapsable: true,
          children: [
            "account/",
            "account/Insurance-cards",
            "account/cars",
            "account/uncompleted-requests",
            "account/electronic-payment",
            "account/technical-support",
            "account/personal-information",
            "account/notifications",
          ],
        },
        {
          title: "Site Pages",
          collapsable: true,
          children: [
            "pages/",
            "pages/home",
            "pages/blog",
            "pages/about",
            "pages/contact-us",
            "pages/policy-privacy",
            "pages/questions",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
