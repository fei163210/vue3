import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/home/index";
import Layout from "@/views/Layout";
import TopCategory from "@/views/category/TopCategory";
import SubCategory from "@/views/category/SubCategory";
const routes = [
  // 一级路由布局容器
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", component: Home },
      // :id表示为动态路由
      { path: "/category/:id", component: TopCategory },
      { path: "/category/sub/:id", component: SubCategory },
    ],
  },
];
//  Vue3创建路由实例
const router = createRouter({
  // 用的是hash的路由模式
  history: createWebHashHistory(),
  routes,
});

export default router;
