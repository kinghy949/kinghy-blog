import comp from "D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/intro.html.vue"
const data = JSON.parse("{\"path\":\"/intro.html\",\"title\":\"个人简介\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"circle-info\",\"cover\":\"/assets/images/cover3.jpg\",\"description\":\"个人简介 基本信息 性别：男 一名Java服务端开发工程师 年龄：24岁 性格开朗，乐于助人 学历经历 本科：北方民族大学 软件工程 联系方式 邮箱：kinghy949@163.com Q Q: 470527375\"},\"readingTime\":{\"minutes\":0.26,\"words\":77},\"filePathRelative\":\"intro.md\",\"excerpt\":\"\\n<h2>基本信息</h2>\\n<ul>\\n<li>性别：男</li>\\n<li>一名Java服务端开发工程师</li>\\n<li>年龄：24岁</li>\\n<li>性格开朗，乐于助人</li>\\n</ul>\\n<h2>学历经历</h2>\\n<ul>\\n<li>本科：北方民族大学 软件工程</li>\\n</ul>\\n<h2>联系方式</h2>\\n<ul>\\n<li>邮箱：<a href=\\\"mailto:kinghy949@163.com\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">kinghy949@163.com</a></li>\\n<li>Q Q: <a href=\\\"https://wpa.qq.com/msgrd?v=3&amp;uin=470527375&amp;site=qq&amp;menu=yes\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">470527375</a></li>\\n</ul>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
