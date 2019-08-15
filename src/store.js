import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forms: null
  },
  mutations: {
    SET_STATE(state, data) {
      state.forms = data;
    }
  },
  actions: {
    setInput({ commit }, data) {
      commit("SET_STATE", data);
    }
  }
});
