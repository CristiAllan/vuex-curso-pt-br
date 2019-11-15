const postModule = {
  namespaced: true,
  state: {
    fullData: {},
    id: '',
    userId: '',
    title: '',
    body: ''
  },
  mutations: {
    setFullData (state, data) {
      state.fullData = data
    },
    setId (state, id) {
      state.id = id
    },
    setUserId (state, userId) {
      state.userId = userId
    },
    setTitle (state, title) {
      state.title = title
    },
    setBody (state, body) {
      state.body = body
    }
  },
  actions: {
    getData ({ commit, dispatch }) {
      const url = 'https://jsonplaceholder.typicode.com/posts/1'

      fetch(url)
        .then(response => response.json())
        .then(json => {
          commit('setFullData', json)

          dispatch('getId', json.id)
          dispatch('getTitle', json.title)
          dispatch('getBody', json.body)
          dispatch('getUserId', json.userId)
        })
        .catch(error => console.log(error))
    },

    getTitle ({ commit }, title) {
      commit('setTitle', title)
    },

    getBody ({ commit }, body) {
      commit('setBody', body)
    },

    getId ({ commit }, id) {
      commit('setId', id)
    },

    getUserId ({ commit }, userId) {
      commit('setUserId', userId)
    }
  },
  getters: {
    postData: state => state.fullData,
    truncatedBody: state => state.body.slice(0, 50) + '...',
    upperTitle: state => state.title.toUpperCase()
  }
}

export default postModule
