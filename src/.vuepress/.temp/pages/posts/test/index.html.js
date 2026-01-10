import comp from "D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/posts/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/test/\",\"title\":\"Test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Test\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Test\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/posts/test/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"王海洋的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Test\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
