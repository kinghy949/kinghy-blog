import { CodeTabs } from "D:/studySpace/kinghy-blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/studySpace/kinghy-blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/studySpace/kinghy-blog/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
