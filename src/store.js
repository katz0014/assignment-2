import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    USER_INFO(state, data) {
      state.user = data;
    },
    SET_STATE(state, data) {
      state.user = data;
    }
  },
  actions: {
    updateUser({ commit }, data) {
      // commit the mutation to update the state, sending the payload as {quantity, product }
      commit("USER_INFO", data);
    },
    setInput({ commit }, data) {
      console.log(data);
      commit("SET_STATE", data);
    }
  }
});
