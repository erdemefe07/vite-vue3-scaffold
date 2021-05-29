import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      user: null
    }
  },
  mutations: {
    authenticate(state, user) {
      state.user = user
    }
  }
})

export default store