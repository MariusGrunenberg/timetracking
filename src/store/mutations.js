export default {
  addTimeEntry(state, timeEntry) {
    state.timeEntries.push(timeEntry);
  },

  removeTimeEntry(state, timeEntry) {
    state.timeEntries.splice(state.timeEntries.indexOf(timeEntry), 1);
  },
};
