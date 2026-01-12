export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/intro.html", { loader: () => import(/* webpackChunkName: "intro.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/intro.html.js"), meta: {"cover":"/assets/images/myself.jpg","excerpt":"\n<h2>基本信息</h2>\n<ul>\n<li>性别：男</li>\n<li>一名Java服务端开发工程师</li>\n<li>年龄：24岁</li>\n<li>性格开朗，乐于助人</li>\n</ul>\n<h2>学历经历</h2>\n<ul>\n<li>本科：北方民族大学 软件工程</li>\n</ul>\n<h2>联系方式</h2>\n<ul>\n<li>邮箱：<a href=\"mailto:kinghy949@163.com\" target=\"_blank\" rel=\"noopener noreferrer\">kinghy949@163.com</a></li>\n<li>Q Q: <a href=\"https://wpa.qq.com/msgrd?v=3&amp;uin=470527375&amp;site=qq&amp;menu=yes\" target=\"_blank\" rel=\"noopener noreferrer\">470527375</a></li>\n</ul>","readingTime":{"minutes":0.26,"words":77},"title":"个人简介","icon":"circle-info","type":"article"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"博客主页","icon":"house"} }],
  ["/aitools/gemini.html", { loader: () => import(/* webpackChunkName: "aitools_gemini.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/gemini.html.js"), meta: {"date":1767484800000,"category":["AI","tools"],"tag":["AI","工具"],"cover":"/assets/images/aitools/gemini.png","excerpt":"\n<h2>1. 简介：为什么使用 Gemini CLI？</h2>\n<p>Gemini CLI (<code>@google/gemini-cli</code>) 是 Google 推出的开源命令行 AI 代理。它不仅是一个聊天机器人，更是一个能通过终端理解你项目上下文、读取文件甚至执行任务的开发助手。</p>\n<p><strong>主要特点：</strong></p>\n<ul>\n<li><strong>上下文感知</strong>：可以直接读取本地文件（如 <code>@main.py</code>）。</li>\n<li><strong>管道支持</strong>：可以将其他命令的输出（如 <code>git diff</code>）直接传给 Gemini。</li>\n<li><strong>多模态</strong>：支持理解代码、文本甚至某些版本中的图片。</li>\n</ul>","readingTime":{"minutes":5.71,"words":1714},"title":"Gemini CLI 完整使用教程","icon":"pen-to-square","type":"article"} }],
  ["/aitools/qoderUseFeel.html", { loader: () => import(/* webpackChunkName: "aitools_qoderUseFeel.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/qoderUseFeel.html.js"), meta: {"date":1768003200000,"category":["AI","tools"],"tag":["AI","工具"],"cover":"/assets/images/aitools/aitools1.png","excerpt":"<p>订阅了 Qoder 之后，我想通过这篇文章分享一些个人使用心得和感受。</p>\n<h1>Qoder 是什么</h1>\n<p><img src=\"/assets/images/aitools/aitools2.png\" alt=\"Qoder\" title=\"Qoder\" loading=\"lazy\"><br>\nQoder（/ˈkoʊdər/）是一款面向真实软件开发的 Agentic 编码平台。通过增强上下文工程与智能体无缝结合，全面理解你的代码库，并以系统化方式推进开发任务。</p>\n<p>它提供代码智能生成、智能问答、多文件修改、编程智能体等能力，思考更深入、编码更高效、构建更出色，为开发者带来高效、流畅的编码体验。</p>","readingTime":{"minutes":4.05,"words":1215},"title":"Qoder 是什么","icon":"pen-to-square","type":"article"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/aitools/", { loader: () => import(/* webpackChunkName: "aitools_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/index.html.js"), meta: {"title":"Aitools"} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"分类","index":false} }],
  ["/category/ai/", { loader: () => import(/* webpackChunkName: "category_ai_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/ai/index.html.js"), meta: {"title":"AI 分类","index":false} }],
  ["/category/tools/", { loader: () => import(/* webpackChunkName: "category_tools_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/tools/index.html.js"), meta: {"title":"tools 分类","index":false} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"标签","index":false} }],
  ["/tag/ai/", { loader: () => import(/* webpackChunkName: "tag_ai_index.html" */"D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/tag/ai/index.html.js"), meta: {"title":"标签: AI","index":false} }],
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
