const { description } = require("../../package");
const fs = require("fs");
const path = require("path");

module.exports = {
  /**
   * Ref :https://v1.vuepress.vuejs.org/guide/assets.html#base-url
   */
  base: "/lavie-ui/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Lavie",
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
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
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
      {
        text: "Github",
        link: "https://github.com/DevTyping/lavie",
      },
    ],
    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: [
          "/guide/",
          "guide/getting-started"
        ],
      },
      {
        title: "UI Components",
        collapsable: false,
        children: [
          {
            title: "Form",
            collapsable: true,
            children: [
              "guide/ui-components/form/auto-complete"
            ],
          },
          "guide/ui-components/buttons",
          "guide/ui-components/cards",
          "guide/ui-components/dialogs",
          "guide/ui-components/menus",
          "guide/ui-components/pagination",
          "guide/ui-components/progress",
          "guide/ui-components/tables",
          "guide/ui-components/tabs",
        ],
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};

function getSideBar(folder, title) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  return [{ title: title, children: ["", ...files] }];
}
