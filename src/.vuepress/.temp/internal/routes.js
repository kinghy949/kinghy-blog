export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"cover":"/assets/images/myself.jpg","excerpt":"\n<h2>基本信息</h2>\n<ul>\n<li>性别：男</li>\n<li>一名Java服务端开发工程师</li>\n<li>年龄：24岁</li>\n<li>性格开朗，乐于助人</li>\n</ul>\n<h2>学历经历</h2>\n<ul>\n<li>本科：北方民族大学 软件工程</li>\n</ul>\n<h2>联系方式</h2>\n<ul>\n<li>邮箱：<a href=\"mailto:kinghy949@163.com\" target=\"_blank\" rel=\"noopener noreferrer\">kinghy949@163.com</a></li>\n<li>Q Q: <a href=\"https://wpa.qq.com/msgrd?v=3&amp;uin=470527375&amp;site=qq&amp;menu=yes\" target=\"_blank\" rel=\"noopener noreferrer\">470527375</a></li>\n</ul>","readingTime":{"minutes":0.26,"words":77},"title":"个人简介","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"博客主页","icon":"house"} }],
  ["/aitools/qoderUseFeel.html", { loader: () => import(/* webpackChunkName: "aitools_qoderUseFeel.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/qoderUseFeel.html.js"), meta: {"date":1768003200000,"category":["agent","tools"],"tag":["人工智能","辅助编程","工具"],"cover":"/aitools/images/aitools1.png","excerpt":"<p>订阅了 Qoder 之后，我想通过这篇文章分享一些个人使用心得和感受。</p>\n<h1>Qoder 是什么</h1>\n<p><br>\nQoder（/ˈkoʊdər/）是一款面向真实软件开发的 Agentic 编码平台。通过增强上下文工程与智能体无缝结合，全面理解你的代码库，并以系统化方式推进开发任务。</p>\n<p>它提供代码智能生成、智能问答、多文件修改、编程智能体等能力，思考更深入、编码更高效、构建更出色，为开发者带来高效、流畅的编码体验。</p>\n<p>其实就是是阿里对标Cursor而打造的一款编码产品</p>\n<h2><a class=\"header-anchor\" href=\"#官网链接-https-qoder-ai\"><span>官网链接：</span></a><a href=\"https://qoder.com/referral?referral_code=bh1p27i5hGelnkvdrwCDjXzh0WaHI0FJ\" target=\"_blank\" rel=\"noopener noreferrer\">https://qoder.ai</a></h2>","readingTime":{"minutes":4.07,"words":1222},"title":"Qoder 是什么","icon":"pen-to-square","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/aitools/", { loader: () => import(/* webpackChunkName: "aitools_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/index.html.js"), meta: {"title":"Aitools"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/category/agent/", { loader: () => import(/* webpackChunkName: "category_agent_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/agent/index.html.js"), meta: {"title":"agent 分类","index":false} }],
  ["/category/tools/", { loader: () => import(/* webpackChunkName: "category_tools_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/tools/index.html.js"), meta: {"title":"tools 分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/", { loader: () => import(/* webpackChunkName: "tag_人工智能_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/人工智能/index.html.js"), meta: {"title":"标签: 人工智能","index":false} }],
  ["/tag/%E8%BE%85%E5%8A%A9%E7%BC%96%E7%A8%8B/", { loader: () => import(/* webpackChunkName: "tag_辅助编程_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/辅助编程/index.html.js"), meta: {"title":"标签: 辅助编程","index":false} }],
  ["/tag/%E5%B7%A5%E5%85%B7/", { loader: () => import(/* webpackChunkName: "tag_工具_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/工具/index.html.js"), meta: {"title":"标签: 工具","index":false} }],
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
