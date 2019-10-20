import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
})
