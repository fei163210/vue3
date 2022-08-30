<template>
  <!-- 顶部组件 -->
  <AppTopnav></AppTopnav>
  <!-- 吸顶头部组件 -->
  <AppHeaderSticky></AppHeaderSticky>
  <!-- 头部组件 -->
  <AppHeader></AppHeader>
  <!-- 内容容器 -->
  <div class="app-body">
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
  <AppFooter></AppFooter>
</template>

<script>
import AppTopnav from "../components/AppTopnav";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import AppHeaderSticky from "../components/AppHeaderSticky";
import { useStore } from "vuex";
export default {
  name: "Layout",
  components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
  // 获取以下分类数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style scoped>
app-body {
  min-height: 600px;
}
</style>
