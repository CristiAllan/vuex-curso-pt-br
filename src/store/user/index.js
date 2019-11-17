const userModule = {
  namespaced: true,
  state: {
    id: '',
    name: '',
    email: ''
  },

  mutations: {
    setId (state, id) {
      state.id = id
    },
    setName (state, name) {
      state.name = name
    },
    setEmail (state, email) {
      state.email = email
    }
  },

  actions: {
    getData ({ commit }) {
      const url = 'https://jsonplaceholder.typicode.com/users/1'

      fetch(url)
        .then(response => response.json())
        .then(json => {
          commit('setId', json.id)
          commit('setName', json.name)
          commit('setEmail', json.email)
        })
        .catch(error => console.log(error))
    }

  },

  getters: {
    upperName: state => state.name.toUpperCase()
  }
}

export default userModule
