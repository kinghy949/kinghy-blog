export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"AI\":{\"path\":\"/category/ai/\",\"indexes\":[0,1]},\"tools\":{\"path\":\"/category/tools/\",\"indexes\":[0,1]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"AI\":{\"path\":\"/tag/ai/\",\"indexes\":[0,1]},\"工具\":{\"path\":\"/tag/%E5%B7%A5%E5%85%B7/\",\"indexes\":[0,1]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

