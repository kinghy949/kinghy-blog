export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"cover":"/assets/images/cover3.jpg","excerpt":"\n<h2>基本信息</h2>\n<ul>\n<li>性别：男</li>\n<li>一名Java服务端开发工程师</li>\n<li>年龄：24岁</li>\n<li>性格开朗，乐于助人</li>\n</ul>\n<h2>学历经历</h2>\n<ul>\n<li>本科：北方民族大学 软件工程</li>\n</ul>\n<h2>联系方式</h2>\n<ul>\n<li>邮箱：<a href=\"mailto:kinghy949@163.com\" target=\"_blank\" rel=\"noopener noreferrer\">kinghy949@163.com</a></li>\n<li>Q Q: <a href=\"https://wpa.qq.com/msgrd?v=3&amp;uin=470527375&amp;site=qq&amp;menu=yes\" target=\"_blank\" rel=\"noopener noreferrer\">470527375</a></li>\n</ul>","readingTime":{"minutes":0.26,"words":77},"title":"个人简介","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"博客主页","icon":"house"} }],
  ["/aitools/qoderUseFeel.html", { loader: () => import(/* webpackChunkName: "aitools_qoderUseFeel.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/qoderUseFeel.html.js"), meta: {"date":1768003200000,"category":["agent","tools"],"tag":["人工智能","辅助编程","工具"],"cover":"/aitools/images/aitools1.png","excerpt":"<p>订阅了 Qoder 之后，我想通过这篇文章分享一些个人使用心得和感受。</p>\n<h1>Qoder 是什么</h1>\n<p><br>\nQoder（/ˈkoʊdər/）是一款面向真实软件开发的 Agentic 编码平台。通过增强上下文工程与智能体无缝结合，全面理解你的代码库，并以系统化方式推进开发任务。</p>\n<p>它提供代码智能生成、智能问答、多文件修改、编程智能体等能力，思考更深入、编码更高效、构建更出色，为开发者带来高效、流畅的编码体验。</p>\n<p>其实就是是阿里对标Cursor而打造的一款编码产品</p>\n<h2><a class=\"header-anchor\" href=\"#官网链接-https-qoder-ai\"><span>官网链接：</span></a><a href=\"https://qoder.com/referral?referral_code=bh1p27i5hGelnkvdrwCDjXzh0WaHI0FJ\" target=\"_blank\" rel=\"noopener noreferrer\">https://qoder.ai</a></h2>","readingTime":{"minutes":4.07,"words":1222},"title":"Qoder 是什么","icon":"pen-to-square","type":"article"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"category":["使用指南"],"tag":["禁用"],"excerpt":"<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>\n","readingTime":{"minutes":0.43,"words":128},"title":"布局与功能禁用","icon":"gears","order":4,"type":"article"} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"category":["使用指南"],"tag":["加密"],"isEncrypted":true,"readingTime":{"minutes":0.51,"words":154},"title":"密码加密的文章","icon":"lock","type":"article"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"category":["指南"],"tag":["布局"],"excerpt":"<p>布局包括:</p>\n<ul>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/navbar.html\" target=\"_blank\" rel=\"noopener noreferrer\">导航栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html\" target=\"_blank\" rel=\"noopener noreferrer\">侧边栏</a></li>\n<li><a href=\"https://theme-hope.vuejs.press/zh/guide/layout/footer.html\" target=\"_blank\" rel=\"noopener noreferrer\">页脚</a></li>\n</ul>","readingTime":{"minutes":0.53,"words":159},"title":"布局","icon":"object-group","order":2,"type":"article"} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"category":["使用指南"],"tag":["Markdown"],"excerpt":"<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>\n<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>\n","readingTime":{"minutes":3.13,"words":938},"title":"Markdown 展示","icon":"fa6-brands:markdown","order":2,"type":"article"} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"author":"Ms.Hope","date":1577836800000,"category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"cover":"/assets/images/cover1.jpg","excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\n","readingTime":{"minutes":1.76,"words":529},"title":"页面配置","icon":"file","order":3,"type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/aitools/", { loader: () => import(/* webpackChunkName: "aitools_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/index.html.js"), meta: {"title":"Aitools"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/category/agent/", { loader: () => import(/* webpackChunkName: "category_agent_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/agent/index.html.js"), meta: {"title":"agent 分类","index":false} }],
  ["/category/tools/", { loader: () => import(/* webpackChunkName: "category_tools_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/tools/index.html.js"), meta: {"title":"tools 分类","index":false} }],
  ["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_使用指南_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/使用指南/index.html.js"), meta: {"title":"使用指南 分类","index":false} }],
  ["/category/%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "category_指南_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/指南/index.html.js"), meta: {"title":"指南 分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/", { loader: () => import(/* webpackChunkName: "tag_人工智能_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/人工智能/index.html.js"), meta: {"title":"标签: 人工智能","index":false} }],
  ["/tag/%E8%BE%85%E5%8A%A9%E7%BC%96%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "tag_辅助编程_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/辅助编程/index.html.js"), meta: {"title":"标签: 辅助编程","index":false} }],
  ["/tag/%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "tag_工具_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/工具/index.html.js"), meta: {"title":"标签: 工具","index":false} }],
  ["/tag/%E7%A6%81%E7%94%A8/", { loader: () => import(/* webpackChunkName: "tag_禁用_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/禁用/index.html.js"), meta: {"title":"标签: 禁用","index":false} }],
  ["/tag/%E5%8A%A0%E5%AF%86/", { loader: () => import(/* webpackChunkName: "tag_加密_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/加密/index.html.js"), meta: {"title":"标签: 加密","index":false} }],
  ["/tag/%E5%B8%83%E5%B1%80/", { loader: () => import(/* webpackChunkName: "tag_布局_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/布局/index.html.js"), meta: {"title":"标签: 布局","index":false} }],
  ["/tag/markdown/", { loader: () => import(/* webpackChunkName: "tag_markdown_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/markdown/index.html.js"), meta: {"title":"标签: Markdown","index":false} }],
  ["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/", { loader: () => import(/* webpackChunkName: "tag_页面配置_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/页面配置/index.html.js"), meta: {"title":"标签: 页面配置","index":false} }],
  ["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/", { loader: () => import(/* webpackChunkName: "tag_使用指南_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/使用指南/index.html.js"), meta: {"title":"标签: 使用指南","index":false} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"文章","index":false} }],
  ["/star/", { loader: () => import(/* webpackChunkName: "star_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/star/index.html.js"), meta: {"title":"星标","index":false} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"时间轴","index":false} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
