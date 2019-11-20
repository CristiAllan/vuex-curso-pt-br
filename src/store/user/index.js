import address from './address'

const userModule = {
  namespaced: true,
  modules: {
    address: address
  },

  state: {
    id: '',
    name: '',
    email: '',
    postsCount: ''
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
    },
    setPostsCount (state, counter) {
      state.postsCount = counter
    }
  },

  actions: {
    getData ({ commit, dispatch }) {
      const url = 'https://jsonplaceholder.typicode.com/users/1'

      fetch(url)
        .then(response => response.json())
        .then(json => {
          commit('setId', json.id)
          commit('setName', json.name)
          commit('setEmail', json.email)

          dispatch('getUserPosts')
          dispatch('address/fillAddress', json.address)
        })
        .catch(error => console.log(error))
    },

    getUserPosts ({ dispatch }) {
      const url = 'https://jsonplaceholder.typicode.com/posts?userId=1'

      fetch(url)
        .then(response => response.json())
        .then(json => dispatch('setPostsCount', json))
    },

    setPostsCount ({ commit }, posts) {
      commit('setPostsCount', posts.length)
    }

  },

  getters: {
    upperName: state => state.name.toUpperCase()
  }
}

export default userModule
