import { createStore } from "vuex";
// 导入持久化插件
import createPersistedstate from "vuex-persistedstate";

// 三个模块
import user from "./modules/user";
import cart from "./modules/cart";
import category from "./modules/category";

// 创建vuex仓库并导出
export default createStore({
  modules: {
    user,
    cart,
    category,
  },
  plugins: [
    // 配置浏览器本地存储
    createPersistedstate({
      // 本地存储名字
      key: "store",
      // 指定需要存储的模块
      path: ["user", "cart"],
    }),
  ],
});
