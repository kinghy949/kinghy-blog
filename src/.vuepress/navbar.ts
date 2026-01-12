import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "工具",
        icon: "pen-to-square",
        prefix: "aitools/",
        children: [
          { text: "Qoder使用感受", icon: "pen-to-square", link: "qoderUseFeel" },
          { text: "Gemini使用教程", icon: "pen-to-square", link: "gemini" },
        ],
      },
    ],
  },
  {
    text: "分类",
    icon: "laptop-code",
    link: "/category/",
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "时间轴",
    icon: "timeline",
    link: "/timeline/",
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
