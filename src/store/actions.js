export default {
  addTimeEntry({ commit }, timeEntry) {
    commit("addTimeEntry", timeEntry);
  },

  removeTimeEntry({ commit }, timeEntry) {
    commit("removeTimeEntry", timeEntry);
  },
};
