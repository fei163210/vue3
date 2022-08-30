import { createStore } from 'vuex'

export default createStore({
  state: {
    // 数据
    username: '张三'
  },
  getters: {
    // vuex的计算属性,用于将state中的数据进行加工
    newName (state) {
      return state.username + '!!'
    }
  },

  actions: {
    // 请求数据函数,用于响应组件中的动作
    updateName (ctx) {
      console.log(ctx)

      setTimeout(() => {
        ctx.commit('updateName')
      }, 1000)
    }
  },
  mutations: {
    // 改数据函数,用于操作数据
    updateName (state) {
      state.username = '张飞'
    }
  },
  modules: {
    // 分模块
  }
})
