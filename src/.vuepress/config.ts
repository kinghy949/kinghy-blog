import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/kinghy-blog/",

  lang: "zh-CN",
  title: "王海洋的博客",
  description: "王海洋的个人博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
