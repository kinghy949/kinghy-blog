export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"agent\":{\"path\":\"/category/agent/\",\"indexes\":[0]},\"tools\":{\"path\":\"/category/tools/\",\"indexes\":[0]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"人工智能\":{\"path\":\"/tag/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/\",\"indexes\":[0]},\"辅助编程\":{\"path\":\"/tag/%E8%BE%85%E5%8A%A9%E7%BC%96%E7%A8%8B/\",\"indexes\":[0]},\"工具\":{\"path\":\"/tag/%E5%B7%A5%E5%85%B7/\",\"indexes\":[0]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

