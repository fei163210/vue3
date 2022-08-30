<template>
  <div>
    App
    <!-- 使用根模块state的数据 -->
    <p>{{ $store.state.username }}</p>
    <!-- 使用根模块getter的数据 -->
    <p>{{ $store.getters.newName }}</p>
    <button @click="mutationFn">点我改变数据</button>
  </div>
</template>
<script>
import { useStore } from 'vuex'
export default {
  name: 'APP',
  setup () {
    // 使用vuex仓库
    const store = useStore()
    // 1.使用根模块state的数据
    // console.log(store.state.username);
    // 2.使用根模块getters的数据
    // console.log(store.getters.newName);

    function mutationFn () {
      // 3.提交根模块mutation的方法
      //  store.commit("updateName");
      // 4.调用根模块的action函数
      store.dispatch('updateName')
    }
    return {
      mutationFn
    }
  }
}
</script>

<style lang="less"></style>
