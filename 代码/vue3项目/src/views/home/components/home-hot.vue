<template lang="">
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <div ref="target" style="position: relative;height: 426px;">
      <Transition name="fade"> 
      <!-- 面板内容  需要获取数据进行渲染 -->
      <ul  v-if="result.length" ref="target" class="goods-list">
        <li v-for="item in result" :key="item.id">
          <RouterLink to="">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">&yen;{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else/>
      </Transition>
    </div>
  </HomePanel>
</template>
<script>
import HomePanel from "./home-panel.vue";
import HomeSkeleton from "./home-skeleton.vue";
import { findHot } from "@/api/home";
import { useLazyData } from "@/hooks";
import { ref } from "vue";
export default {
  name: "HomeHot",
  components: { HomePanel, HomeSkeleton },
  setup() {
    const { target, result } = useLazyData(findHot);
    return {
      target,
      result,
    };
  },
};
</script>
<style lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
