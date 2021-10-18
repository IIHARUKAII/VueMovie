import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    movie : []
  },
  mutations: {
    setMovie(state, payload){
      state.movie.push(payload);
    }
  },
  actions: {
    setMovie(state, payload){
      const data = payload
      state.commit('setMovie', data)
    }
  },
  modules: { 
  },
  getters: {
    getMovie : state => state.movie
  }
})
