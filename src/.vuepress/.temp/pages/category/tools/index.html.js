import comp from "D:/studySpace/kinghy-blog/src/.vuepress/.temp/pages/category/tools/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/tools/\",\"title\":\"tools 分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"title\":\"tools 分类\",\"blog\":{\"type\":\"category\",\"name\":\"tools\",\"key\":\"category\"},\"layout\":\"Blog\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"tools 分类\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kinghy949.github.io/kinghy-blog/category/tools/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"王海洋的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"tools 分类\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
