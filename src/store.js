import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_STATE(state, data) {
      state.user = data;
    }
  },
  actions: {
    setInput({ commit }, data) {
      commit("SET_STATE", data);
    }
  }
});
