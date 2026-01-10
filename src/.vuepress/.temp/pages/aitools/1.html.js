import comp from "D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/aitools/1.html.vue"
const data = JSON.parse("{\"path\":\"/aitools/1.html\",\"title\":\"香蕉 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-05T00:00:00.000Z\",\"category\":[\"香蕉\",\"水果\"],\"tag\":[\"黄\",\"弯曲的\",\"长\"],\"description\":\"香蕉 1 标题 2 这里是内容。 标题 3 这里是内容。\"},\"readingTime\":{\"minutes\":0.13,\"words\":38},\"filePathRelative\":\"aitools/1.md\",\"excerpt\":\"\\n<h2>标题 2</h2>\\n<p>这里是内容。</p>\\n<h3>标题 3</h3>\\n<p>这里是内容。</p>\\n\",\"autoDesc\":true}")
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
