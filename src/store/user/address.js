const address = {
  namespaced: true,
  state: {
    street: '',
    suite: '',
    city: ''
  },

  mutations: {
    setStreet (state, street) {
      state.street = street
    },
    setSuite (state, suite) {
      state.suite = suite
    },
    setCity (state, city) {
      state.city = city
    }
  },

  actions: {
    fillAddress ({ commit }, addressData) {
      commit('setStreet', addressData.street)
      commit('setSuite', addressData.suite)
      commit('setCity', addressData.city)
    }
  }
}

export default address
