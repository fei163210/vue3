// 提供复用的逻辑函数钩子
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

// 数据懒加载函数
export const useLazyData = (apiFn) => {
  // 需要
  // 被观察的对象
  // 不同的API函数
  const target = ref(null);
  const result = ref([]);
  const { stop } = useIntersectionObserver(
    // target 是观察的目标dom容器，必须是dom容器，而且是vue3.0方式绑定的dom对象
    target,
    // isIntersecting 是否进入可视区域，true是进入 false是移出
    // observerElement 被观察的dom
    ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        // 调用API获取数据
        apiFn().then((data) => {
          result.value = data.result;
        });
      }
    }
  );
  return {
    target,
    result,
  };
};
