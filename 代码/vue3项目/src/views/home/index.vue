<template>
  <div class="page-home">
    <div class="home-entry">
      <!-- 主页商品栏 -->
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
      <!-- 新鲜好物 -->
      <HomeNew />
      <!-- 人气推荐 -->
      <HomeHot />
      <!-- 热门品牌 -->\
      <HomeBrand />
    </div>
  </div>
</template>
<script>
import HomeCategory from "@/views/home/components/HomeCategory.vue";
import HomeBanner from "@/views/home/components/home-banner.vue";
import HomeNew from "@/views/home/components/home-new.vue";
import HomeHot from "@/views/home/components/home-hot.vue";
import HomeBrand from "@/views/home/components/home-brand.vue";
// 测试 面板组件好不好使
export default {
  name: "HomePage",
  components: { HomeCategory, HomeBanner, HomeNew, HomeHot, HomeBrand },
};
</script>

<style scoped lang="less">
.container {
  color: @xtxColor;
  // 添加阴影样式
}
</style>
