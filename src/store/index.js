import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import userModule from './user/index'
import postModule from './post/index'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    userModule: userModule,
    postModule: postModule
  }
})
