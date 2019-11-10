const postModule = {
  namespaced: true,
  state: {
    count: 0
  },
  mutations: {
    incrementCount (state) {
      state.count += 1
    }
  },
  actions: {
    incrementCount ({ commit }) {
      commit('incrementCount')
    }
  }
}

export default postModule
