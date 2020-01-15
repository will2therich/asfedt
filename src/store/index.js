import Vue from "vue";
import Vuex from "vuex";
import { state } from "./state";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getLocation(state) {
      return state.beat.latLong;
    },
    getBeat(state) {
      return state.beat;
    }
  }
});
