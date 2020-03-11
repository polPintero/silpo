const form = {
  state: {
    data: {}
  },
  mutations: {
    TO_SERVER(state, payload) {
      state.data[payload.field] = payload.value;
    }
  }
};

export default form;
