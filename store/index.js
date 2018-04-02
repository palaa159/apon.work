export const actions = {
  async nuxtServerInit ({ commit }, { app, req }) {
  }
}

export const mutations = {
  SET_CART_SHOW (state, bool) {
    state.purchase.isCartShowing = bool
  },
  SET_PROD_CART_AMT (state, obj = {
    amount: 1,
    id: 1
  }) { // n = 1, -1
    let clonedItems = state.purchase.items
    // Find item by obj.id
    const i = clonedItems.findIndex(x => x.id === obj.id)
    clonedItems[i].amount = obj.amount
    state.purchase.items = clonedItems
  },
  REMOVE_PROD (state, id) {
    if (id) {
      let clonedItems = state.purchase.items.filter(x => x.id !== id)
      state.purchase.items = clonedItems
    }
  }
}