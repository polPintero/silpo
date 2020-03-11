const cart = {
  state: {
    items: []
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      state.items.push(payload);
    },
    REMOVE_FROM_CART(state, id) {
      const index = state.items.findIndex(i => i.id === id);
      if (index !== -1){
        state.items.splice(index, 1);
      }
    },
  }
};

export default cart;
