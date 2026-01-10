import comp from "D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/posts/test/2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/test/2.html\",\"title\":\"苹果 2\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"pen-to-square\",\"date\":\"2022-01-02T00:00:00.000Z\",\"category\":[\"苹果\"],\"tag\":[\"红\",\"大\",\"圆\"],\"star\":true,\"description\":\"一个被星标了的苹果文章。\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"苹果 2\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-01-02T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"王海洋\\\",\\\"url\\\":\\\"https://kinghy949.github.io/kinghy-blog/\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kinghy949.github.io/kinghy-blog/posts/test/2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"王海洋的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"苹果 2\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一个被星标了的苹果文章。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"圆\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"大\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"红\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-01-02T00:00:00.000Z\"}]]},\"readingTime\":{\"minutes\":0.16,\"words\":48},\"filePathRelative\":\"posts/test/2.md\",\"excerpt\":\"\\n<p>一个被星标了的苹果文章。</p>\\n\",\"autoDesc\":true}")
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
